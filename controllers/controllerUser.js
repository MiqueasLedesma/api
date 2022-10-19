const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../server/database/db");
const fs = require("fs");
const { JWT_SECRET } = process.env;

const {
    sendEmail,
    welcomeEmail,
    forgotPasswordEmail
} = require("../controllers/emailController");
const { welcome } = require("../emailtemplates/welcome")

const postUser = async (req, res) => {
    let saltRounds = 11;
    const {
        name,
        lastName,
        typeIdentification,
        identification,
        contact,
        email,
        address,
        password,
    } = req.body;

    try {
        if (
            !name ||
            !lastName ||
            !email ||
            !password
        ) {
            return res.status(400).send("Information is required!");
        }
        /* let allUser = await User.findAll();
        let iduser = allUser.find(
            (e) =>
                e.name.toLowerCase() === name.toLowerCase() &&
                e.identification.toLowerCase() === identification.toLowerCase()
        );

        if (iduser) {
            return res
                .status(400)
                .send("A user with these credentials already exists.");
        } */

        bcrypt.hash(password, saltRounds, async function (err, hash) {
            const newUser = await User.findOrCreate({
                where: {
                    email
                },
                defaults: {
                    name,
                    lastName,
                    typeIdentification,
                    identification,
                    contact,
                    email,
                    address,
                    password: hash,
                }
            });

            const token = jwt.sign({ id: newUser[0].id }, JWT_SECRET);
            let userData = {
                name: newUser[0].name,
                lastName: newUser[0].lastName,
                typeIdentification: newUser[0].typeIdentification || "",
                identification: newUser[0].identification || "",
                contact: newUser[0].contact || "",
                email: newUser[0].email,
                address: newUser[0].address || "",
                token: token,
                isAdmin: true,
                id: newUser[0].id
            };

            //await sendEmail(welcome(userData.email))

            return res.status(201).json(userData); //===========>>>>>> respuesta al front-end
        });
        return;
    } catch (error) {
        console.log(error);
        return res.send(error.message).status(400)
    }
    //res.status(201).redirect("/welcome");
};

const postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (email && password) {
            const users = await User.findAll();
            const user = users.find(
                (user) => user.email.toLowerCase() === email.toLowerCase()
            );
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (result === true) {
                        const token = jwt.sign({ id: user.id }, JWT_SECRET);
                        let userData
                        if (user.isAdmin) {
                            userData = {
                                name: user.name,
                                lastName: user.lastName,
                                typeIdentification: user.typeIdentification,
                                identification: user.identification,
                                contact: user.contact,
                                email: user.email,
                                address: user.address,
                                token: token,
                                isAdmin: true,
                                id: user.id
                            };
                        } else {
                            userData = {
                                name: user.name,
                                lastName: user.lastName,
                                typeIdentification: user.typeIdentification,
                                identification: user.identification,
                                contact: user.contact,
                                email: user.email,
                                address: user.address,
                                token: token,
                                isAdmin: false,
                                id: user.id
                            };
                        }
                        console.log("welcome");
                        res.status(201).json(userData);
                        return;
                    } else {
                        console.log("Please validate the information.");
                        return res.status(404).redirect("/register");
                    }
                });
            } else {
                console.log("User not found");
                return res.status(404).send("User not found.");
            }
        }
    } catch (error) {
        return res(error.message).status(400)
    }

};

const getUsers = async (req, res) => {
    /* esta es una funcion solo para el administrador 
     const { id } = req.params;
    const admin = await User.findOne({ where: { isAdmin: true } });
    if (admin.id !== id || !id) {
        return res.status(400).send("Not found!");
    } */

    try {
        const allUsers = await User.findAndCountAll();

        res.status(200).send(allUsers);
    } catch (error) {
        console.log(error);
    }
};

const userDetail = async function (id) {
    try {
        let user = await User.findByPk(id, {
            model: User,
            where: {
                name: id.name,
                lastName: id.lastName,
                identification: id.identification,
                contact: id.contact,
                email: id.email,
                address: id.address,
            },
        });
        //  res.status(200).send(user);

        if (!user) {
            return "User not found";
        }

        if (user) {
            return user;
        }
    } catch (error) {
        console.log(error);
    }
};

const getIdUsers = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        let userData = await userDetail(id);
        res.status(200).send(userData);
    } catch (error) {
        res.status(404).send(error);
    }
};

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];
        jwt.verify(bearerToken, JWT_SECRET, (error, authdata) => {
            if (error) {
                return res.status(403).json({ message: "Unauthorized access" });
            } else {
                req.authdata = authdata;
                next();
            }
        });
        //req.token = bearerToken
        //next()
    } else {
        res.status(403).json({ message: "Unauthorized access" });
    }
};

const updatePersonalData = async (req, res) => {
    let id = req.authdata.id;
    console.log(id)
    const {
        name,
        lastName,
        typeIdentification,
        identification,
        contact,
        address,
    } = req.body;

    try {
        let dataUser = await User.findByPk(id);

        if (dataUser) {
            dataUser.update({
                name,
                lastName,
                typeIdentification,
                identification,
                contact,
                address,
            });
            let userData
            if (dataUser.isAdmin) {
                userData = {
                    name: dataUser.name,
                    lastName: dataUser.lastName,
                    typeIdentification: dataUser.typeIdentification,
                    identification: dataUser.identification,
                    contact: dataUser.contact,
                    address: dataUser.address,
                    isAdmin: true
                };
            } else {
                userData = {
                    name: dataUser.name,
                    lastName: dataUser.lastName,
                    typeIdentification: dataUser.typeIdentification,
                    identification: dataUser.identification,
                    contact: dataUser.contact,
                    address: dataUser.address,
                };
            }

            return res.status(201).json(userData);
        } else {
            return res.send({ message: "User is not found" }).status(400)
        }

    } catch (error) {
        console.log(error);
        return res.send(error.message).status(400)
    }
};

const changeAdmin = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByPk(id)
        if (user.email !== "admin@admin.com") {
            const updated = await User.update(
                {
                    isAdmin: !user.isAdmin
                }, {
                where: { id },
                returning: true
            },

            )

            return res.send(updated[1][0])
        } return res.status(400).send({ message: "Can't change this user" })
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ where: { email } })
        if (user) {
            const token = jwt.sign({ id: user.id }, "cambiarcontrasena")
            const url = `http://localhost:3000/changepassword?token=${token}`
            await sendEmail(forgotPasswordEmail(email, url))
            return res.send("ok")

        } else {
            res.status(400).send("Error")
        }

    } catch (error) {
        return res.status(400).send(error.message)
    }
}

const verifyTokenChange = (req, res, next) => {

    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];
        jwt.verify(bearerToken, "cambiarcontrasena", (error, authdata) => {
            if (error) {
                return res.status(403).json({ message: "Unauthorized access" });
            } else {
                req.authdata = authdata;
                next();
            }
        });
        //req.token = bearerToken
        //next()
    } else {
        res.status(403).json({ message: "Unauthorized access" });
    }

}

const changePassword = async (req, res) => {
    try {
        let id = req.authdata.id;
        const { password } = req.body
        bcrypt.hash(password, 11, async function (err, hash) {
            const usr = await User.update({ password: hash }, {
                where: { id }
            })
        });

        return res.send({ message: "Password is changed!" });

    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = {
    postUser,
    postLogin,
    updatePersonalData,
    getUsers,
    getIdUsers,
    verifyToken,
    changeAdmin,
    forgotPassword,
    changePassword,
    verifyTokenChange
};
