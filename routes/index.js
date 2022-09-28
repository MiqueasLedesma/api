require("dotenv").config();
const { Router } = require("express");
const router = Router();


const routeProducts = require('./routeProducts');
const routeUsers = require('./routeUsers');
const routeFilter = require('./routeFilter');


router.use('/products', routeProducts);
router.use('/users', routeUsers);
<<<<<<< HEAD
router.use('/filter', routeFilter);
=======
>>>>>>> b3fee667270a7248cb837af718da37391cbe73c2

module.exports = router;

