const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../server/database/db");
const fs = require("fs");

const postUser = async (req, res) => {
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
            return res.status(400).send("information is missing!");
        }
        let allUser = await User.findAll();
        let iduser = allUser.find(
            (e) =>
                e.name.toLowerCase() === name.toLowerCase() &&
                e.identification.toLowerCase() ===
                    identification.toLowerCase() &&
                e.email.toLowerCase() === email.toLowerCase()
        );

        if (iduser) {
            return res
                .status(400)
                .send("A user with these credentials already exists.");
        }
        const saltRounds = 11;
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

            //======>>>>>falta adicionar pais , ciudad y otras
            console.log("User created with succefully!!");
            res.status(201).send(newUser);
        });
        return;
    } catch (error) {
        console.log(error);
    }
    res.status(201).redirect("/:idUser/updateprofile");
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

const updatePersonalData = async (req, res) => {
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
        await User.update( {
            where: {
                name,
                lastName,
                typeIdentification,
                identification,
                contact,
                email,
                address,
                password,
            },
        });
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = { postUser, postLogin, updatePersonalData };
