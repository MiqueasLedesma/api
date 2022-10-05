const { Category } = require('../server/database/db');

const getAllCategory = async (req, res) => {
    try {
        await Category.findAll()
            .then(r => res.send(r))
    } catch (err) {
        console.log(err)
        return res.status(400).send('failed');
    };
};

module.exports = getAllCategory; 