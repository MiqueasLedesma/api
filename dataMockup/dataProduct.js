const { Product } = require("../server/database/db")

const createProducts = async () => {
    await Product.bulkCreate([
        { 
            name: "Teclado Mecanico ASUS ROG Strix Scope TKL RGB Cherry Red",
            description: "1er teclado",
            purchasePrice: 19.99,
            salePrice: 29.99,
            stock: 10,
            rating: 0,
            brandId: 3,
            categoryId:8
        },

    ])
}

module.exports = { createProducts };