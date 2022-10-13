const { Router } = require('express');
const { getAllOrders, howManyPayments, createOrder } = require('../controllers/orderControllers');
const router = Router();

router.get('/howmany', howManyPayments);
router.get('/', getAllOrders);
router.post('/', createOrder);


module.exports = router;
