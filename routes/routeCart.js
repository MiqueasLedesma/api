const { Router } = require('express');
const { addProductCart, getCartShopping, getAllCartShopping, cleanCartShopping } = require('../controllers/cartShoppingController');
const router = Router();

router.get('/all', getAllCartShopping);
router.delete('/',cleanCartShopping);
router.get('/', getCartShopping);
router.post('/', addProductCart);


module.exports = router;
