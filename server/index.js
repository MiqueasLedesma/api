const express = require("express");
const cookieparser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");
const routes = require("../routes/index.js");
const server = express();
const cors = require("cors");

require('./database/db')

// db= "authentication";

server.use(express());
server.use(express.urlencoded({ extended: true, limit: "150mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieparser());
server.use(morgan("dev"));
server.use(cors());
server.use("/", routes);

module.exports = server;