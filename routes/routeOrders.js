const { Router } = require('express');
const { getAllOrders , howManyPayments } = require('../controllers/orderControllers');
const router = Router();

router.get('/howmany', howManyPayments);
router.get('/', getAllOrders);


module.exports = router;
