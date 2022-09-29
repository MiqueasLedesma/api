const { Router } = require('express');
const {  sortAndFilter } = require('../controllers/filterController');
const router = Router();


router.get('/', sortAndFilter);

module.exports = router;