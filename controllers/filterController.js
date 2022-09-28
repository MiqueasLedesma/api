const { getProducts } = require("./productsController");
const { Product } = require('../server/database/db');

const filterByCategoryOrBrand = async (req, res) => {
    const { category, brand } = req.body;
    console.log(category, brand)

    if (!category.name && !brand.name) return getProducts(req, res);

    if (category.name && !brand.name) {
        try {
            await findAll({
                where: {
                    category: category.name
                }
            })
                .then(r => res.send(r))
        } catch (error) {
            console.log(error);
            res.status(400).send('failed!')
        };
    };

    if (brand.name && !category.name) {
        try {
            await findAll({
                where: {
                    brand: brand.name
                }
            })
                .then(r => res.send(r))
        } catch (error) {
            console.log(error);
            return res.status(400).send('failed');
        };
    };

    if (category.name && brand.name) {
        try {
            await Product.findAll({
                where: {
                    category:category.name,
                    brand: brand.name
                }
            }).then(r => res.send(r))
        } catch (error) {
            console.log(error);
            return res.status(400).send('failed!')
        };
    };
};

module.exports = filterByCategoryOrBrand;