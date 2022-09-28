const { Router } = require("express");
const router = Router();
const {
    getProducts,
    postProduct,
    getProductByID,
    postImage,
} = require("../controllers/controllers");

router.get("/", getProducts);

router.get("/:id", getProductByID);

router.post("/", postProduct);

router.put("/", async (req, res) => {});

router.post("/image", postImage);

module.exports = router;
