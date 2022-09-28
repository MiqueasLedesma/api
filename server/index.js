const express = require("express");
const cookieparser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");
const routes = require("../routes/index.js");
const server = express();
const cors = require("cors");
const fileUpload = require('express-fileupload');

require('./database/db')

// db= "authentication";

server.use(express());
server.use(express.urlencoded({ extended: true, limit: "150mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieparser());
server.use(morgan("dev"));
server.use(cors());
server.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
  }));
server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

module.exports = server;