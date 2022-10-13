const { Router } = require('express');
const { getPaymentLink, getPaymentCartLink, getPaymentNotification } = require('../controllers/paymentsControllers');
const router = Router();


router.post('/', getPaymentLink);
router.post('/cart', getPaymentCartLink);
router.post('/notification', getPaymentNotification)

module.exports = router;