const {Router} = require('express');
const {
  postReview,
  getReviews,
  changeReview,
  deleteReview,
  revertDeleteReview,
  getAllDeletedReviews,
  getAllReviews,
  getAllReviewsByIdUser
} = require('../controllers/reviewController');
const router = Router();

router.get('/all', getAllReviews); // Recibe todas las reviews;
router.get('/idUser', getAllReviewsByIdUser); // Recibe todas las reviews; 
router.post('/', postReview); // Recibe por query productId, un usuario solo puede publicar una review para cada producto
router.get('/', getReviews); // Recibe por body productId, userId, detail y stars;
router.put('/delete', deleteReview); // Recibe el id de la review por query;
router.get('/alldeleted', getAllDeletedReviews); // devuelve todos los productos que fueron eliminados;
router.put('/revertdelete', revertDeleteReview); // Recibe el id de la review por query;
router.put('/update', changeReview); // //Recibe el id de la review por body;

module.exports = router;
