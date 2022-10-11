const { Router } = require('express');
const { addProductCart, getCartShopping, getAllCartShopping } = require('../controllers/cartShoppingController');
const router = Router();

router.get('/all', getAllCartShopping);
router.get('/', getCartShopping);
router.post('/', addProductCart);


module.exports = router;
