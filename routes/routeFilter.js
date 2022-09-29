const { Router } = require('express');
const { filterByCategoryOrBrand, sortAndFilter } = require('../controllers/filterController');
const router = Router();


router.get('/', filterByCategoryOrBrand);

module.exports = router;