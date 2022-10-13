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
const routeOrders = require("./routeOrders");
const routeEmails = require("./routeEmails");

router.use('/products', routeProducts);
router.use('/users', routeUsers);
router.use('/filter', routeFilter);
router.use('/categorys', routeCategorys);
router.use('/brands', routeBrands);
router.use('/updateordelete', routeUpdateAndDelete);
router.use('/reviews' ,routeReviews);
router.use("/carts",routeCart);
router.use('/payments', routePayments)
router.use('/email',routeEmails)
router.use('/orders', routeOrders);

module.exports = router;
