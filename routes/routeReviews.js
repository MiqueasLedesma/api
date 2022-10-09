const { Router } = require('express');
const { postReview, getReviews, changeReview, deleteReview, revertDeleteReview, getAllDeletedReviews } = require('../controllers/reviewController');
const router = Router();

router.post('/', postReview); // Recibe por query productId, un usuario solo puede publicar una review para cada producto
router.get('/', getReviews);    // Recibe por body productId, userId, detail y stars;
router.put('/delete', deleteReview); //Recibe el id de la review por query;
router.get('/alldeleted', getAllDeletedReviews); // devuelve todos los productos que fueron eliminados;
router.put('/revertdelete', revertDeleteReview);  //Recibe el id de la review por query;
router.put('/update', changeReview); //  //Recibe el id de la review por body;

module.exports = router;