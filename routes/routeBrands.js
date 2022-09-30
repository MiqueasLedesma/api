const { Router } = require('express');
const getAllBrands = require('../controllers/brandController');
const router = Router();

router.get('/', getAllBrands);

module.exports = router;