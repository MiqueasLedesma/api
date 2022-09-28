const { getProducts } = require("./productsController");
const { Product, Category, Brand, Image } = require('../server/database/db');

const filterByCategoryOrBrand = async (req, res) => {
    const { category, brand } = req.body;
    console.log(category, brand)

    if (!category && !brand) return getProducts(req, res);

    if (category && !brand) {
        try {
            await Product.findAll({
                // where:{
                //     name : category
                // },
                // include:[
                //     Image,
                //     Brand,
                //     Product
                // ]
                where: {
                    categoryId: category
                },
                include: [
                    Category,
                    Image,
                    Brand
                ]
            })
                .then(r => res.send(r))
        } catch (error) {
            console.log(error);
            res.status(400).send('failed!')
        };
    };

    if (brand && !category) {
        try {
            await Product.findAll({
                where: {
                    brandId: brand
                },
                include: [
                    Category,
                    Image,
                    Brand
                ]
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
                    brandId: brand,
                    categoryId: category
                }


            }).then(r => res.send(r))
        } catch (error) {
            console.log(error);
            return res.status(400).send('failed!')
        };
    };
};

module.exports = filterByCategoryOrBrand;