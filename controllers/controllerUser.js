const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../server/database/db");
const fs = require("fs");
const { JWT_SECRET } = process.env;

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
            !typeIdentification ||
            !identification ||
            !contact ||
            !email ||
            !address ||
            !password
        ) {
            return res.status(400).send("Information is required!");
        }
        let allUser = await User.findAll();
        let iduser = allUser.find(
            (e) =>
                e.name.toLowerCase() === name.toLowerCase() &&
                e.identification.toLowerCase() === identification.toLowerCase()
        );

        if (iduser) {
            res.status(400).send(
                "A user with these credentials already exists."
            );
            return;
        }
        bcrypt.hash(password, saltRounds, async function (err, hash) {
            const newUser = await User.create({
                name,
                lastName,
                typeIdentification,
                identification,
                contact,
                email,
                address,
                password: hash,
            });
            const token = jwt.sign({ id: newUser.id }, JWT_SECRET);

            let userData = {
                name: newUser.name,
                lastName: newUser.lastName,
                typeIdentification: newUser.typeIdentification,
                identification: newUser.identification,
                contact: newUser.contact,
                email: newUser.email,
                address: newUser.address,
                token,
                isAdmin: true
            };

            console.log("User created with succefully!!");
            return res.status(201).json(userData); //===========>>>>>> respuesta al front-end
        });
        return;
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
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
                        let userData;
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
                            };
                        }
                        console.log("welcome");
                        res.status(201).json(userData);
                        return;
                    } else {
                        console.log("Please validate the information.");
                        return res.status(404).json({
                            message: "Please validate the information.",
                        });
                    }
                });
            } else {
                console.log("User not found");
                return res.status(404).send("User not found.");
            }
        }
    } catch (error) {
        console.log(error);
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

    const {
        name,
        lastName,
        typeIdentification,
        identification,
        contact,
        email,
        address,
    } = req.body;

    try {
        let dataUser = await User.findByPk(id);

        dataUser.update({
            name,
            lastName,
            typeIdentification,
            identification,
            contact,
            address,
            email,
        });

        console.log("User updated with succefully!!");
        //res.status(201).send(dataUser);

        let userData = {
            name: dataUser.name,
            lastame: dataUser.lastName,
            typeIdentification: dataUser.typeIdentification,
            identification: dataUser.identification,
            contact: dataUser.contact,
            address: dataUser.address,
            email: dataUser.email,
        };
        return res.status(201).json(userData); //====>>>> respuesta al front-end
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    postUser,
    postLogin,
    updatePersonalData,
    getUsers,
    getIdUsers,
    verifyToken,
};
