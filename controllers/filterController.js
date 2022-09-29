const { Product, Category, Brand, Image } = require('../server/database/db');

// Es altamente posible que tenga que agregar otra funcion mas para hacer el paginado asique no es version final

const sortAndFilter = async (req, res) => {
    const { categoryId, brandId, sortBy } = req.body;
    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);
    let page = 0;
    let size = 10;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber >= 0) page = pageAsNumber;
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber >= 1) size = sizeAsNumber;
    if (!sortBy) {
        if (!categoryId && !brandId) {
            try {
                await Product.findAndCountAll({
                    limit: size,
                    offset: page * size,
                    include: [
                        Category,
                        Brand,
                        Image
                    ],
                })
                    .then(r => res.send({
                        content: r.rows,
                        totalPage: Math.ceil(r.count / size)
                    }));
            } catch (error) {
                console.log(error)
                return res.status(400).send('failed!')
            }
        };

        if (categoryId && !brandId) {
            try {
                await Product.findAndCountAll({
                    where: {
                        categoryId,
                    },
                    limit: size,
                    offset: page * size,
                    include: [
                        Category,
                        Brand,
                        Image
                    ]
                })
                    .then(r => res.send({
                        content: r.rows,
                        totalPage: Math.ceil((r.count / size))
                    }))
            } catch (error) {
                console.log(error)
                return res.status(400).send('failed!')
            };
        };

        if (brandId && !categoryId) {
            try {
                await Product.findAndCountAll({
                    where: {
                        brandId,
                    },
                    limit: size,
                    offset: page * size,
                    include: [
                        Category,
                        Brand,
                        Image
                    ]
                })
                    .then(r => res.send({
                        content: r.rows,
                        totalPage: Math.ceil((r.count / size))
                    }))
            } catch (error) {
                console.log(error)
                return res.status(400).send('failed!')
            };
        };

        if (brandId && categoryId) {
            try {
                await Product.findAndCountAll({
                    where: {
                        brandId,
                        categoryId
                    },
                    limit: size,
                    offset: page * size,
                    include: [
                        Category,
                        Brand,
                        Image
                    ]
                })
                    .then(r => res.send({
                        content: r.rows,
                        totalPage: Math.ceil((r.count / size))
                    }))
            } catch (error) {
                console.log(error)
                return res.status(400).send('failed!')
            }
        }
    } else {
        let { type, sort } = sortBy;
        if (!type) type = 'salePrice';
        if(!sort) sort = 'DESC';
        if (!categoryId && !brandId) {
            try {
                await Product.findAndCountAll({
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
                })
                    .then(r => res.send({
                        content: r.rows,
                        totalPage: Math.ceil(r.count / size)
                    }));
            } catch (error) {
                console.log(error)
                return res.status(400).send('failed!')
            }
        };

        if (categoryId && !brandId) {
            try {
                await Product.findAndCountAll({
                    where: {
                        categoryId,
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
                })
                    .then(r => res.send({
                        content: r.rows,
                        totalPage: Math.ceil((r.count / size))
                    }))
            } catch (error) {
                console.log(error)
                return res.status(400).send('failed!')
            };
        };

        if (brandId && !categoryId) {
            try {
                await Product.findAndCountAll({
                    where: {
                        brandId,
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
                })
                    .then(r => res.send({
                        content: r.rows,
                        totalPage: Math.ceil((r.count / size))
                    }))
            } catch (error) {
                console.log(error)
                return res.status(400).send('failed!')
            };
        };

        if (brandId && categoryId) {
            try {
                await Product.findAndCountAll({
                    where: {
                        brandId,
                        categoryId
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
                })
                    .then(r => res.send({
                        content: r.rows,
                        totalPage: Math.ceil((r.count / size))
                    }))
            } catch (error) {
                console.log(error)
                return res.status(400).send('failed!')
            }
        }
    }
}

module.exports = { sortAndFilter };