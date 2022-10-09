const { Router } = require('express');
const { getPaymentLink, getPaymentCartLink } = require('../controllers/paymentsControllers');
const router = Router();


router.get('/', getPaymentLink);
router.get('/cart', getPaymentCartLink);

module.exports = router;