require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
/* const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
); */
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, NODE_ENV } = process.env;

const sequelize =
    NODE_ENV === "production"
        ? new Sequelize({
            database: DB_NAME,
            dialect: "postgres",
            host: DB_HOST,
            port: 5432,
            username: DB_USER,
            password: DB_PASSWORD,
            pool: {
                max: 3,
                min: 1,
                idle: 10000
            },
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                },
                keepAlive: true,
            },
            ssl: true,
        })
        :
        new Sequelize(
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
const { User, Brand, Category, Image, Product, Review, Order, OrderDetail, Cart, DataShipping, Geo, Sucursal } = sequelize.models;

User.belongsToMany(Product, { through: "user_favorite" })
Product.belongsToMany(User, { through: "user_favorite" })

Product.belongsTo(Brand,{constraints: false})
Brand.hasMany(Product,{constraints: false})

Product.belongsTo(Category,{constraints: false})
Category.hasMany(Product,{constraints: false})

Product.hasMany(Image,{constraints: false})
Image.belongsTo(Product,{constraints: false})

Product.hasMany(Review,{constraints: false})
Review.belongsTo(Product,{constraints: false})

User.hasMany(Review,{constraints: false})
Review.belongsTo(User,{constraints: false})

User.hasMany(Order,{constraints: false})
Order.belongsTo(User,{constraints: false})

Product.belongsTo(OrderDetail,{constraints: false})
OrderDetail.hasMany(Product,{constraints: false})

Order.belongsTo(OrderDetail,{constraints: false})
OrderDetail.belongsTo(Order,{constraints: false})

Sucursal.hasMany(Order,{constraints: false})
Order.belongsTo(Sucursal,{constraints: false})



module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
