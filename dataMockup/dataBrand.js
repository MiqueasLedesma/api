const { Brand } = require("../server/database/db")

const createBrands = async () => {
    await Brand.bulkCreate([
        { name: "Intel" },
        { name: "AMD" },
        { name: "Asus" },
        { name: "MSI" },
        { name: "Gigabyte" },
        { name: "Kingstone" },
        { name: "Western Digital" },
        { name: "Cougar" },
    ])
}

module.exports = { createBrands };