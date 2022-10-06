const { Brand } = require("../server/database/db")

const brands = [
    "Intel",
    "AMD",
    "Asus",
    "MSI",
    "Gigabyte",
    "Kingstone",
    "Western Digital",
    "Cougar",
    "HyperX",
    "LG",
    "Adata"
]

const createBrands = async () => {
    try {
        await brands.map(e => Brand.findOrCreate({
            where: {
                name: e
            }
        })).then(console.log(e))
    } catch (error) {
        console.log(error.message);
    }
};


module.exports = { createBrands };
