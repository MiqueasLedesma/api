const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../server/database/db");
const fs = require("fs");

const postUser = async (req, res) => {
    const saltRounds = 11;
    const {
        name,
        lastName,
        typeIdentification,
        identification,
        contact,
        email,
        address,
        password,
        isAdmin,
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
            return res.status(400).send("information is missing!");
        }
        let allUser = await User.findAll();
        let iduser = allUser.find(
            (e) =>
                e.name.toLowerCase() === name.toLowerCase() &&
                e.identification.toLowerCase() === identification.toLowerCase()
        );

        if (iduser) {
            return res
                .status(400)
                .send("A user with these credentials already exists.");
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
                isAdmin,
            });
            console.log("User created with succefully!!");
            res.status(201).send(newUser);
        });
        return;
    } catch (error) {
        console.log(error);
    }
    res.status(201).redirect("/:id/updateprofile");
};

const postLogin = async (req, res) => {
    const { JWT_SECRET } = process.env;
    const { email, password } = req.body;

    if (email && password) {
        const users = await User.findAll();
        const user = users.find(
            (user) => user.email.toLowerCase() === email.toLowerCase()
        );
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    const token = jwt.sign({ id: user.id }, JWT_SECRET);
                    res.status(200).send({ token });
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

const getIdUsers = async (req, res) => {
    const { id } = req.params;

    try {
        let userData = await userDetail(id);
        res.status(200).send(userData);
    } catch (error) {
        res.status(404).send(error);
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
        /*  res.status(200).send(user); */
        if (!user) {
            return "User not found";
        } else {
            return user;
        }
    } catch (error) {
        console.log(error);
    }
};

const updatePersonalData = async (req, res) => {
    const { id } = req.params;
    const { name, lastName, contact, email, address } = req.body;
    try {
        let dataUser = await User.findByPk(id);

        if (dataUser) {
            dataUser.update({
                name,
                lastName,
                contact,
                address,
                email,
            });
            /* await User.update(
                dataUser,
                ,
                {
                    where: {
                        name: dataUser.name,
                        lastName: dataUser.lastName,
                        contact: dataUser.contact,
                        address: dataUser.address,
                        email: dataUser.email,
                    },
                }
            ); */
        }

        /* let a = await dataUser.save(); */
        return res.status(200).send(dataUser);
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
};
