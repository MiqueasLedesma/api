const { Router } = require('express');
const { addProductCart, getCartShopping } = require('../controllers/cartShoppingController');
const router = Router();

router.get('/', getCartShopping);
router.post('/', addProductCart);


module.exports = router;
