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
            await Product.findByPk(id, {
                include: [
                    Category,
                    Brand,
                    Image
                ]
            }).then(r => res.send(r));
        } catch (error) {
            console.log(error);
            res.status(400).send('failed!')
        };
    };
};

// ===>>>> Controlador para todos los productos y por query.name
const getProducts = async (req, res) => {
    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);
    let page = 0;
    let size = 10;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber >= 0) page = pageAsNumber;
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber >= 1) size = sizeAsNumber;

    if (req.query.name) { // En la misma ruta que trae todos los productos, si recibe un query busca por query
        const { name } = req.query;
        try {
            await Product.findAndCountAll({
                where: {
                    name: {
                        [Op.iLike]: '%' + name + '%' // No sensitive (acepta mayusculas y minusculas)
                    }
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
                })) // .then() -> envia la respuesta devuelve  todas las coincidencias
        } catch (error) {
            console.log(error);
            res.status(400).send(error.message);
        }
    } else {     // Si no recibe name entonces devulve todos
        try {
            await Product.findAndCountAll({
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
                    totalPage: Math.ceil(r.count / (size * 2))
                }))
        } catch (error) {
            console.log(error.message)
            res.status(400).send(error.message)
        }
    };
};

// ============>>>>>>>>>Post de un producto

const postProduct = async (req, res) => {

    const { name, description, purchasePrice, salePrice, stock, brand, category } = req.body;

    try {
        if (!name || !description || !purchasePrice || !salePrice || !stock) {
            return res.send('information is missing!') // Cambie el mensaje, significa 'falta informacion!'
        }

        let allProduct = await Product.findAll()
        let aProduct = allProduct.find(e => e.name.toLowerCase() === name.toLowerCase())

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
            brand,
            category,
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
        console.log(error);
        return res.status(400).send(error.message);
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
