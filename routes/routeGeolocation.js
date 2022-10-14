const { Router } = require('express');
const getAllGeolocation = require('../controllers/geoController');
const router = Router();

router.get('/', getAllGeolocation);

module.exports = router;