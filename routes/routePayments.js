const { Router } = require('express');
const { getPaymentLink } = require('../controllers/paymentsControllers');
const router = Router();


router.get('/', getPaymentLink);

module.exports = router;