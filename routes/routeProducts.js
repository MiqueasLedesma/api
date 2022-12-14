const { Router } = require('express');
const router = Router();
const { getProducts, postProduct, getProductByID, postImage, postCategory, getProductByName } = require("../controllers/productsController");


router.get('/carts', getProductByName)

router.get('/', getProducts, async (req, res) => {
    //getProducts();
});

router.get('/:id', getProductByID, async (req, res) => {

});

router.post('/', postProduct, async (req, res) => {
    //res.send(postProduct());
});

router.put('/', async (req, res) => {

});

router.post('/image', postImage);

router.get('/cat', postCategory)



module.exports = router;

