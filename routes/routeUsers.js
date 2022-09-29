const { Router } = require("express");
const router = Router();
const {
    postUser,
    postLogin,
    updatePersonalData,
    getUsers,
    getIdUsers,
} = require("../controllers/controllerUser");


router.get("/", getUsers);
router.get("/:id", getIdUsers);

router.post("/register", postUser, async (req, res) => {
    try {
        const { user } = req.body;
        if (!user.email) {
            return res.status(400).json({ error: "Missing data" });
        }
        let newUser = await postUser(user);

        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post("/login", postLogin);

router.put("/updateprofile", updatePersonalData);

module.exports = router;
