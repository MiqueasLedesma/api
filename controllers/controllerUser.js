const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const { User } = require("../server/database/db"); 
const fs = require('fs')

const postUser = async (req, res)=>{
const {name, lastName, typeIdentification, identification, contact, email, address, password } = req.body;
        try{
            
            if(!name || !lastName || !typeIdentification || !identification || !contact || !email || !address || !password){
                return res.send('information is missing!')
            }
            let allUser = await User.findAll()
            let iduser =  allUser.find(e => e.name.toLowerCase() === name.toLowerCase() && e.identification.toLowerCase() === identification.toLowerCase());

            if(iduser){
                return res.send("A user with these credentials already exists.")
            }
            const saltRounds = 11;
            bcrypt.hash(password, saltRounds, async function (err, hash){

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
                console.log("User Created with succefully");
                res.status(201).send(newUser);
            });
            return ;

        }catch(error){
            console.log(error)
        }
        res.status(201).redirect("/login");
};

module.exports = {postUser};