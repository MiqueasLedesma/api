const { Category } = require("../server/database/db")

const createCategories = async () => {
    await Category.findOrCreate([
        { name: "Mother Board" },
        { name: "Memory" },
        { name: "Processor" },
        { name: "Disk" },
        { name: "Case" },
        { name: "Graphics card GPU" },
        { name: "Monitor" },
        { name: "Keyboard" },
        { name: "Cooler" },
    ])
}

module.exports = { createCategories };
