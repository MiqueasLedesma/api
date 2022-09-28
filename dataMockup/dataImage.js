const { Image } = require("../server/database/db")

const createImages = async () => {
    await Image.bulkCreate([
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664340381/tech-store/tec-1_ewrjdr.jpg",
            pathImage: "tech-store/tec-1_ewrjdr",
            productId: 1
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664340380/tech-store/tec1_xfhel4.jpg",
            pathImage: "tech-store/tec1_xfhel4",
            productId: 1
        },


    ])
}

module.exports = { createImages };