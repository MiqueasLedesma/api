const { Router } = require('express');
const router = Router();
const { getProducts, postProduct, getProductByID } = require("../controllers/controllers");


router.get('/', getProducts,  async (req, res) => {
    //getProducts();
});

router.get('/:id', getProductByID , async (req , res) => {

});

router.post('/', postProduct,  async (req, res) => {
    //res.send(postProduct());
});

router.put('/', async (req, res) =>{

});



module.exports = router;

