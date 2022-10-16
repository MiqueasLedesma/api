const { Router } = require('express');
const { getAllGeolocation, createSucursal, updateSucursal, deleteSucursal } = require('../controllers/geoController');
const router = Router();

router.get('/', getAllGeolocation);
router.post('/', createSucursal)
router.put('/update', updateSucursal)
router.delete('/delete', deleteSucursal)

module.exports = router;