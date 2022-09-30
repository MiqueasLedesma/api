require("dotenv").config();
const { Router } = require("express");
const router = Router();

const routeProducts = require('./routeProducts');
const routeUsers = require('./routeUsers');
const routeFilter = require('./routeFilter');
const routeCategorys = require('../controllers/controllerCategory');
const routeBrands = require('../controllers/brandController');

router.use('/products', routeProducts);
router.use('/users', routeUsers);
router.use('/filter', routeFilter);
router.use('/categorys', routeCategorys);
router.use('/brands', routeBrands);

module.exports = router;

