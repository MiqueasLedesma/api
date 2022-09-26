require("dotenv").config();
const { Router } = require("express");
const router = Router();


const routeProducts = require('./routeProducts');
const routeUsers = require('./routeUsers');


router.use('/products', routeProducts);
router.use('/users', routeUsers);


module.exports = router;






