const { Router } = require('express');
const { addProductCart, getCartShopping, getAllCartShopping, cleanCartShopping, deleteByPk, updateCart, } = require('../controllers/cartShoppingController');
const router = Router();

router.get('/all', getAllCartShopping);
router.delete('/', cleanCartShopping);
router.get('/', getCartShopping);
router.post('/', addProductCart);
router.delete('/', cleanCartShopping);
router.delete('/byid', deleteByPk);
router.put('/', updateCart)

module.exports = router;
