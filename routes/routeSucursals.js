const { Router } = require('express');
const router = Router()
const { getAllSucursal, addSucursal  } = require('../controllers/sucursalController')

router.get('/', getAllSucursal); 
router.post('/', addSucursal); 


module.exports = router;