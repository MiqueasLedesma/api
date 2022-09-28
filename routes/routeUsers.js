const { Router } = require("express");
const router = Router();
const { postUser, postLogin, updatePersonalData } = require("../controllers/controllerUser");
const { Review } = require("../server/database/db");


router.get("/");
router.get("/:id",);


router.post("/register", postUser, async (req, res) =>{
    
});


router.post("/login", postLogin, );

router.put("/:idUser/updateprofile", updatePersonalData, async (req, res)=>{
    const { idUser } =req.params;

    try{
        await updatePersonalData(idUser, req.body)
        res.status(200).send('Personal Data updated!')
        
    }catch(error){
        res.status(404).send(error)
    }


});

module.exports = router;
