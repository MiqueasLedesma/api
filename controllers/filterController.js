const { Op } = require('sequelize');
const { Product, Category, Brand, Image } = require('../server/database/db');

const sortAndFilter = async (req, res) => {
    const { categoryId, brandId, name } = req.query;
    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);
    let type = req.query.type || 'id';
    let sort = req.query.sort || 'DESC';
    let category = categoryId || { [Op.between]: [1, 20] };
    let brand = brandId || { [Op.between]: [1, 20] };
    let nameSearch = name || ""
    let page = 0;
    let size = 10;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber >= 0) page = pageAsNumber;
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber >= 1) size = sizeAsNumber;
    try {
        await Product.findAndCountAll({
            where: {
                categoryId: category,
                brandId: brand,
                name: {
                    [Op.iLike]: '%' + nameSearch + '%'
                }
            },
            limit: size,
            offset: page * size,
            include: [
                Category,
                Brand,
                Image
            ],
            order: [
                [type, sort]
            ]
        }).then(r => {
            return res.send({
                content: r.rows,
                totalPage: Math.ceil(r.count / (size * 2))
            })
        })
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error.message);
    }
}

module.exports = { sortAndFilter };