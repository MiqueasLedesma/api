const { Router } = require('express');
const router = Router();
const { User, Brand, Category, Image, Product } = require("../server/database/db"); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



//==============ruta para registrar usuarios=====================//

router.post("/register", async (req, res) => {
    const saltRounds = 11;
    let { name, contact, email, address, password } = req.body;
    
    try {
        if (!name || !contact || !email || !address || !password) {
            return res.status(400).send("The field is incorrect/empty please validate");
        }
        
        const users = await User.findAll();
        const exists = users.find(
            (user) =>
                user.name === name &&
                user.contact === contact &&
                user.email === email &&
                user.address === address
        );

        if (exists) {
            res.status(400).send("A user with these credentials already exists.");
            return;
        }

        bcrypt.hash(password, saltRounds, async function (err, hash) {
            const newUser = await User.create({
                name,
                contact,
                email,
                address,
                password: hash,
            });
            console.log("User Created");
            res.status(201).send(newUser);
        });

        return;
        
    } catch (error) {
        console.log(error);
    }

    res.status(201).redirect("/login");
});



//=============>>>>>>Ruta para login con authenticacion<<<<<<=============//




router.post("/login", async (req, res) => {
    const { JWT_SECRET } = process.env;
    const { contact, password } = req.body;

    if (contact && password) {
        const users = await User.findAll();
        const user = users.find((user) => user.contact === contact);
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    const token = jwt.sign({ id: user.id }, JWT_SECRET);
                    // req.session.userId = user.id;  ||------->>>>>> metodo de cookies
                    return res.status(200).redirect("/home");
                    //return res.status(200).send({token});
                }  else {
                    console.log("Incorrect key.");
                    return res.redirect("/register");
                    //res.status(404).send("Incorrect key.");
                } 

               
            });
        } else {
            console.log("User not found");
            return res.status(404).send("User not found.");
        }
    }

    
});                     

module.exports = router;

