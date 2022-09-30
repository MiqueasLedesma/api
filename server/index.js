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
  useTempFiles: true,
  tempFileDir: './uploads'
}));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;