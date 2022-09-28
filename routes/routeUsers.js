const { Router } = require('express');
const router = Router();
const { postUser } = require('../controllers/controllerUser');


router.get('/',   async (req, res) => {
    //getProducts();
});

router.get('/:id', async (req , res) => {

});

router.post('/register', postUser);
router.post('/login', postUser);


router.put('/', async (req, res) =>{

});

module.exports = router;