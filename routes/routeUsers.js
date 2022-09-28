const { Router } = require("express");
const router = Router();
const { postUser, postLogin } = require("../controllers/controllerUser");

router.get("/");
router.get("/:id",);
router.post("/register", postUser);
router.post("/login", postLogin);

router.put("/");

module.exports = router;
