const { Router } = require('express');
const getAllBrands = require('../controllers/brandController');
const { Brand, User } = require('../server/database/db');

const router = Router();

router.get('/', getAllBrands);
router.post('/', async(req,res)=>{
    const {id,name} = req.body
    const brand = await Brand.update({
        name: name
    }, {
        where: {
            id
        },
        returning: true
    }, )
    const user = await User.findOne({where:{id}})
    return res.send(user.email)
})

module.exports = router;