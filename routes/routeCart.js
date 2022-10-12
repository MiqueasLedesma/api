const { Router } = require('express');
const { addProductCart, getCartShopping, cleanCartShopping } = require('../controllers/cartShoppingController');
const router = Router();

router.get('/', getCartShopping);
router.post('/', addProductCart);
router.delete('/', cleanCartShopping);


module.exports = router;
