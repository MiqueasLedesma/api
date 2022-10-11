const { Router } = require('express');
<<<<<<< HEAD
const { addProductCart, getCartShopping, getAllCartShopping } = require('../controllers/cartShoppingController');
const router = Router();


router.get('/all', getAllCartShopping);
=======
const { addProductCart, getCartShopping } = require('../controllers/cartShoppingController');
const router = Router();

>>>>>>> origin/master
router.get('/', getCartShopping);
router.post('/', addProductCart);


module.exports = router;
