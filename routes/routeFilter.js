const { Router } = require('express');
const router = Router();
const filterByCategoryOrBrand = require("../controllers/filterController");

router.get('/', filterByCategoryOrBrand);

module.exports = router;