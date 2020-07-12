// PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const logger = require("morgan");
const cors = require('cors');

// USER DEFINED ROUTERS
const productRouter = require("./api/resources/product/product.controller");
const cartRouter = require('./api/resources/cart/cart.controller');
// DATABASE CONNECTION 'MONGODB'
// const url = "mongodb://localhost:27017/ecommerce";
const url = "mongodb+srv://medical:express@medicalexpresscluster-hkv5p.mongodb.net/ecommerce?retryWrites=true&w=majority";
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connect.then(
  (db) => {
    console.log("Connected correctly to the Server_DB");
  },
  (error) => {
    console.log(error);
  }
);
// PORT AND HOSTNAME
hostname = "localhost";
port = 1000;
// VARIABLE
const app = express();
// PACKAGES PASSING PARAMETERS
app.use(logger("dev"));
app.use(express.json());
app.use(express.json({ extended: false }));
app.use(cors());
app.use(express.static(__dirname + "/public"));
// USER DEFINED PACKAGES
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
// Global Error Handler MiddleWare
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.message = "Invalid Route";
  error.status = "404";
  next(error);
});
// Error Handler Middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    message: error.message,
  });
});
// RUNNING SERVER
const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
