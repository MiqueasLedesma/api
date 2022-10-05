const { Router } = require("express");
const router = Router();
const {
    postUser,
    postLogin,
    updatePersonalData,
    getUsers,
    getIdUsers,
    verifyToken,
} = require("../controllers/controllerUser");

router.get("/", verifyToken, getUsers);
router.get("/:id", verifyToken, getIdUsers);

router.post("/register", postUser);

router.post("/login", postLogin);
router.put("/updateprofile", verifyToken, updatePersonalData);

module.exports = router;
