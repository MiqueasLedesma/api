const { Router } = require('express');
const getAllCategory = require('../controllers/controllerCategory');
const router = Router();


router.get('/', getAllCategory);

module.exports = router;