const { Category } = require("../server/database/db")

const categ = [
    "Mother Board",
    "Memory",
    "Processor",
    "Disk",
    "Case",
    "Graphics card GPU",
    "Monitor",
    "Keyboard",
    "Cooler"
];


const createCategories = async () => {
    try {
        await categ.map(e => Category.findOrCreate({
            where: {
                name: e
            }
        }))
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { createCategories };
