require("dotenv").config();
const { Router } = require("express");
const router = Router();


const routeProducts = require('./routeProducts');
const routeUsers = require('./routeUsers');
const routeFilter = require('./routeFilter');
const routeCategorys = require('../controllers/controllerCategory');
const routeBrands = require('../controllers/brandController');
const routeUpdateAndDelete = require('./routeUpdateAndDelete');
const routeReviews = require('./routeReviews');
const routeCart = require("./routeCart");
const routePayments = require("./routePayments");

router.use('/products', routeProducts);
router.use('/users', routeUsers);
router.use('/filter', routeFilter);
router.use('/categorys', routeCategorys);
router.use('/brands', routeBrands);
router.use('/updateordelete', routeUpdateAndDelete);
router.use('/reviews' ,routeReviews);
router.use("/cart",routeCart);
router.use('/payments', routePayments)

module.exports = router;
