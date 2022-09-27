const { Router } = require('express');
const router = Router();
const { getProducts, postProduct, postImage } = require("./controllers.js");


router.get('/', getProducts,  async (req, res) => {
    //getProducts();
});

router.post('/', postProduct,  async (req, res) => {
    //res.send(postProduct());
});

router.put('/', async (req, res) =>{

});

router.post('/image',postImage, async (req, res) =>{

});

module.exports = router;