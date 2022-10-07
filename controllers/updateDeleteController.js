const { Product, Category, Brand, Image } = require('../server/database/db');

const deleteProduct = async (req, res) => {
    const { id } = req.query;
    let isANumber = /^([0-9])*$/;
    if (isANumber.test(id) && id > 0) {
        try {
            await Product.update({
                status: false
            }, {
                where: {
                    id: id
                }
            })
                .then(r => res.send('has been deleted!'))
        } catch (error) {
            console.log(error.message);
            return res.status(400).send(error.message);
        };
    } else {
        return res.status(400).send('ID must be a positive number!')
    };
};

const revertDelete = async (req, res) => {
    const { id } = req.query;
    let isANumber = /^([0-9])*$/;
    if (isANumber.test(id) && id > 0) {
        try {
            await Product.update({
                status: true
            }, {
                where: {
                    id: id
                }
            })
        } catch (error) {
            console.log(error.message);
            return res.status(400).send(error.message);
        }
    } else {
        return res.status(400).send('ID must be a positive number!')
    };
};

const getDeletedItems = async (req, res) => {
    try {
        await Product.findAll({
            where: {
                status: false
            },
            include: {
                Category, Brand, Image
            }

        })
            .then(r => res.send(r))
    } catch (error) {
        console.log(error.message)
        return res.status(400).send(error.message)
    }
}

module.exports = {
    deleteProduct,
    revertDelete,
    getDeletedItems
}