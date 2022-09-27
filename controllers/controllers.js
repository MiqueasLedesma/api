const { Op } = require('sequelize');
const { Product, User, Brand, Category, Image } = require('../server/database/db');


// ===> Controlador para buscar producto por id, devuelve toda la informacion disponible del producto en la tabla
const getProductByID = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (!id) return res.status(400).send('bad request!') // Si no recibe ningun id retorna bad request
    else {
        try {
            await Product.findByPk(id).then(r => res.send(r)); // .then()   
        } catch (error) {
            console.log(error);
            res.status(400).send('failed!')
        };
    };
};

// ===>>>> Controlador para todos los productos y por query.name
const getProducts = async (req, res) => {
    if (req.query.name) { // En la misma ruta que trae todos los productos, si recibe un query busca por query
        const { name } = req.query;
        try {
            await Product.findAll({
                where: {
                    name: {
                        [Op.iLike]: '%' + name + '%' // No sensitive (acepta mayusculas y minusculas)
                    }
                }
            }).then(r => res.send(r)) // .then() -> envia la respuesta devuelve  todas las coincidencias
        } catch (error) {
            console.log(error);
            res.status(400).send('failed!');
        }
    } else {     // Si no recibe name entonces devulve todos
        try {
            const allProduct = await Product.findAll();
            console.log(allProduct);
            return res.send(allProduct);
        } catch (error) {
            console.log(error)
            res.send('failed!')
        }
    }
};

// ============>>>>>>>>>Post de un producto

const postProduct = async (req, res) => {

    const { name, description, purchasePrice, salePrice, stock, status, brand, category, rating } = req.body;
    try {
        if (!name || !description || !purchasePrice || !salePrice || !stock || !status || !rating) {
            return res.send('information is missing!') // Cambie el mensaje, significa 'falta informacion!'
        }

        let allProduct = await Product.findAll()
        let aProduct = allProduct.find(e => e.name.toLowerCase() === name.toLowerCase() && e.status === status)

        if (aProduct) {
            return res.send('the product exist!')
        }

        let newProduct = await Product.create({
            name,
            description,
            purchasePrice,
            salePrice,
            stock,
            status,
            brand,
            category,
            rating
        })
        let brandDb = await Brand.findAll({
            where: { name: brand }
        })  //===============>>>>>>>>>> image presenta problemas se sugiere q este dento de la entidad producto
        let imageDb = await Image.findAll({
           where:{ name: image}
        }) 
        let categoryDb = await Category.findAll({
            where: { name: category }
        })

        newProduct.addBrand(brandDb)
        newProduct.addImage(imageDb)
        newProduct.addCategory(categoryDb)

        console.log(newProduct)
        res.send(newProduct)
        return;


    } catch (error) {
        console.log(error)
    }


};

module.exports = { getProducts, postProduct, getProductByID };