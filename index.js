require("dotenv").config();
const server = require("./server");
const { conn } = require("./server/database/db");
const { createCategories } = require("./dataMockup/dataCategory");
const { createBrands } = require("./dataMockup/dataBrand");
const { createProducts } = require("./dataMockup/dataProduct");
const { createImages } = require("./dataMockup/dataImage");
const { createUser } = require("./dataMockup/dataUser");
const { createGeos} = require("./dataMockup/dataGeo")
const { PORT } = process.env;

// Syncing all the models at once.

conn.sync({ force: false }).then(async () => {
    await createBrands();
    await createCategories();
    await createProducts();
    await createImages();
    await createUser();
    await createGeos();
    server.listen(PORT || 3001, async () => {
        console.log(`%s 🚀 listening at ${PORT || 3001} 🚀`); // eslint-disable-line no-console
    });
});
