const { Router } = require('express');
const { deleteProduct, revertDelete, getDeletedItems, updateItem } = require('../controllers/updateDeleteController');
const router = Router();

router.put('/delete', deleteProduct);
router.get('/listdeleted', getDeletedItems);
router.put('/revertDelete', revertDelete);
router.put('/update' , updateItem);

module.exports = router;