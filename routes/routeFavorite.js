const { Router } = require('express');
const { postFavorite, getAllFavorites, getDeleteFavorites } = require('../controllers/favoriteController');
const router = Router();


router.get('/', getAllFavorites)
router.post('/', postFavorite);
router.post('/delete', getDeleteFavorites)

module.exports = router;