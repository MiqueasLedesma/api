const { Router } = require('express');
const { getAllOrders, howManyPayments, createOrder, getOrderDetail } = require('../controllers/orderControllers');
const router = Router();

router.get('/howmany', howManyPayments);
router.get('/', getAllOrders);
router.get('/detail', getOrderDetail);
router.post('/', createOrder);


module.exports = router;
