const { Router } = require('express');
const { getPaymentLink, getPaymentCartLink } = require('../controllers/paymentsControllers');
const router = Router();


router.post('/', getPaymentLink);
router.post('/cart', getPaymentCartLink);

module.exports = router;