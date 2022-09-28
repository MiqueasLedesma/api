const { Op } = require('sequelize');
const { Product, User, Brand, Category, Image } = require('../server/database/db');
const { uploadImage } = require('../utils/cloudinary')
const fs = require('fs-extra')

// ===> Controlador para buscar producto por id, devuelve toda la informacion disponible del producto en la tabla
const getProductByID = async (req, res) => {
    const { id } = req.params;
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
                    },
                }
            }).then(r => res.send(r)) // .then() -> envia la respuesta devuelve  todas las coincidencias
        } catch (error) {
            console.log(error);
            res.status(400).send('failed!');
        }
    } else {     // Si no recibe name entonces devulve todos
        try {
            const allProduct = await Product.findAll({
                include: [
                    Category,
                    Brand,
                    Image
                ]
            });
            console.log(allProduct);
            return res.send(allProduct);
        } catch (error) {
            console.log(error)
            res.send('failed!')
        }
    };
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

        const brandDb = await Brand.findOne({
            where: { name: brand }
        })
        const categoryDb = await Category.findOne({
            where: { name: category }
        })
        const newProduct = await Product.create({
            name,
            description,
            purchasePrice,
            salePrice,
            stock,
            status,
            brand,
            category,
            rating,
            brandId: brandDb.id,
            categoryId: categoryDb.id
        })

        if (req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            fs.unlink(req.files.image.tempFilePath)
            const newImage = await Image.create({
                url: result.secure_url,
                pathImage: result.public_id,
                productId: newProduct.id
            })
        }

        res.json(newProduct)
        return;


    } catch (error) {
        console.log(error)
    };
};

const postImage = async (req, res) => {
    try {
        //console.log(req.files.image.tempFilePath)
        if (req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath)
            fs.unlink(req.files.image.tempFilePath)
            res.status(200).send(result)
        }
    } catch (error) {
        console.log(error)
    }

}

const postCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await Category.findOrCreate({
            where: { name }
        })
        res.send(category)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = { getProducts, postProduct, getProductByID, postImage, postCategory };
