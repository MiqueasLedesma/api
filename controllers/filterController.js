const { getProducts } = require("./productsController");
const { Product } = require('../server/database/db');

const filterByCategoryOrBrand = async (req, res) => {
    const { category, brand } = req.body;
    console.log(category, brand)

    if (!category && !brand) return getProducts(req, res);

    if (category && !brand) {
        try {
            await findAll({
                where: {
                    category
                }
            })
                .then(r => res.send(r))
        } catch (error) {
            console.log(error);
            res.status(400).send('failed!')
        };
    };

    if (brand && !category) {
        try {
            await findAll({
                where: {
                    brand
                }
            })
                .then(r => res.send(r))
        } catch (error) {
            console.log(error);
            return res.status(400).send('failed');
        };
    };

    if (category && brand) {
        try {
            await Product.findAll({
                where: {
                    category,
                    brand
                }
            }).then(r => res.send(r))
        } catch (error) {
            console.log(error);
            return res.status(400).send('failed!')
        };
    };
};

module.exports = filterByCategoryOrBrand;