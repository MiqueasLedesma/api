const { Router } = require('express');
const { getAllOrders, howManyPayments, createOrder, getOrderDetail, updateOrder } = require('../controllers/orderControllers');
const router = Router();

router.get('/howmany', howManyPayments);
router.get('/', getAllOrders);
router.get('/detail', getOrderDetail);
router.post('/', createOrder);
router.put('/', updateOrder);


module.exports = router;
