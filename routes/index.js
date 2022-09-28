require("dotenv").config();
const { Router } = require("express");
const router = Router();


const routeProducts = require('./routeProducts');
const routeUsers = require('./routeUsers');
const routeFilter = require('./routeFilter');


router.use('/products', routeProducts);
router.use('/users', routeUsers);
router.use('/filter', routeFilter);

module.exports = router;






