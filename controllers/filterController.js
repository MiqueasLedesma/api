const { Product, Category, Brand, Image } = require('../server/database/db');


// Esta funcion recibe un req y realiza el filtrado segun marca y categoria
const handleReq = async (req) => {

    const { category, brand } = req.body;

    if (!category && !brand) { // ==> Caso no recibe ningun parametro por body, devuelve todos los productos
        let response = await Product.findAll({
            include: [
                Category,
                Brand,
                Image
            ]
        })
        return response;
    };

    if (category && !brand) { // ==> si olo recibe la category
        let response = await Product.findAll({
            where: {
                categoryId: category
            },
            include: [
                Category,
                Image,
                Brand
            ]
        })
        return response
    };

    if (brand && !category) { // ==> si solo recibe la marca
        let response = await Product.findAll({
            where: {
                brandId: brand
            },
            include: [
                Category,
                Image,
                Brand
            ]
        })
        return response;
    };

    if (category && brand) { // ==> si recibe ambos parametros
        let response = await Product.findAll({
            where: {
                brandId: brand,
                categoryId: category
            }
        })
        return response;
    };
};

//esta funcion ordena los resultados de la funcion anterior, segunlo que le llegue por query
const filterByCategoryOrBrand = async (req, res) => {
    const { sortBy } = req.query;
    if (sortBy) {
        let sorted;
        await handleReq(req)
            .then(r => {
                console.log('Entro al switch')
                switch (sortBy) { // ==> fuertemente inspirado en el reducer de redux
                    case 'ratingAsc':
                        sorted = r.sort((a, b) => a.rating - b.rating);
                        console.log('RASC');
                        return res.send(sorted);
                    case 'ratingDsc':
                        sorted = r.sort((a, b) => b.rating - a.rating);
                        console.log('RDSC');
                        return res.send(sorted);
                    case 'priceAsc':
                        sorted = r.sort((a, b) => a.salePrice - b.salePrice);
                        console.log('PASC');
                        return res.send(sorted);
                    case 'priceDsc':
                        sorted = r.sort((a, b) => b.salePrice - a.salePrice);
                        console.log('PDSC');
                    default:
                        console.log('entro al default');
                        return res.send(r);
                };
            })
            .catch(e => {
                console.log(e);
                res.send('failed!')
            });
    } else { // si no recibe ninguna query, devuelve todos los productos
        console.log('entro al else')
        try {
            await handleReq(req)
                .then(r => res.send(r))
        } catch (error) {
            console.log(error);
            return res.status(400).send('failed!');
        };
    };
};

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
        try {
            if (!categoryId && !brandId) {
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
            }
            if (categoryId && !brandId) {
                await Product.findAndCountAll({
                    where: {
                        categoryId: categoryId
                    },
                    limit: size,
                    offset: page * size,
                    include: [
                        Category,
                        Brand,
                        Image
                    ]
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).send('failed')
        }
    } else {
        // Aca va a ir un switch case;
    }
}


module.exports = { filterByCategoryOrBrand, sortAndFilter };



// experimento raro pa ver que onda

