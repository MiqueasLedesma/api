const { Router } = require("express");

const router = Router();

const {
    sendEmail,
    welcomeEmail,
    welcome

} = require("../controllers/emailController");

router.get("/",async(req,res)=>{
    const email = await sendEmail(welcome("otro@test.com"))
    res.send(email)
})




module.exports = router;