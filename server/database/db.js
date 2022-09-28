require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
);

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "../models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "../models", file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Brand, Category, Image, Product, Review, Order, OrderDetails } = sequelize.models;

//User.belongsTo(Product, {throw: "user_product"})
//Product.belongsTo(User,{throw: "user_product"})

Product.belongsTo(Brand)
Brand.hasMany(Product)

Product.belongsTo(Category)
Category.hasMany(Product)

Product.hasMany(Image)
Image.belongsTo(Product)

Product.hasMany(Review)
Review.belongsTo(Product)

User.hasMany(Review)
Review.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Product.hasMany(OrderDetails)
OrderDetails.belongsTo(Product)

Order.hasMany(OrderDetails)
OrderDetails.belongsTo(Order)



module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
