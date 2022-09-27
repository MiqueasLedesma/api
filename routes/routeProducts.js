const { Router } = require('express');
const router = Router();
const { getProducts, postProduct, getProductByID } = require("../controllers/productsController");

router.get('/', getProducts,  async (req, res) => {
    //getProducts();
});

router.get('/:id', getProductByID , async (req , res) => {

});
undefined
router.post('/', postProduct,  async (req, res) => {
    //res.send(postProduct());
});

router.put('/', async (req, res) =>{

});



module.exports = router;

