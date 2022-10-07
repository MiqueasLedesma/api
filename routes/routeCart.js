const { Router } = require('express');
const { addProductCart } = require('../controllers/cartShoppingController');
const router = Router();

router.post('/', addProductCart);


module.exports = router;
