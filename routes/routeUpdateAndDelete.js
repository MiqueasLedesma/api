const { Router } = require('express');
const { deleteProduct, revertDelete, getDeletedItems } = require('../controllers/updateDeleteController');
const router = Router();

router.put('/delete', deleteProduct);
router.get('/listdeleted', getDeletedItems);
router.put('/revertDelete', revertDelete);

module.exports = router;