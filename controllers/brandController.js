const { Brand } = require('../server/database/db');

const getAllBrands = async (req, res) => {
    try {
        await Brand.findAll()
            .then(r => res.send(r));
    } catch (error) {
        console.log(error);
        return res.status(400).send('failed!');
    };
};

module.exports = getAllBrands;