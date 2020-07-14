// PACKAGES
const express = require("express");
const mongoose = require("mongoose");
// const http = require("http");
const logger = require("morgan");
const cors = require("cors");
// const passport = require("passport");

// USER DEFINED ROUTERS
const setJWTStrategy = require("./api/middlewares/passport-jwt");

const userRouter = require("./api/resources/user/user.controller");
const productRouter = require("./api/resources/product/product.controller");
const cartRouter = require("./api/resources/cart/cart.controller");
const orderRouter = require("./api/resources/orders/order.controller");
// DATABASE CONNECTION 'MONGODB'
// const mongoCon = "mongodb://localhost:27017/ecommerce";
const mongoCon = "mongodb+srv://medical:express@medicalexpresscluster-hkv5p.mongodb.net/ecommerce?retryWrites=true&w=majority";
const connect = mongoose.connect(mongoCon, {
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
const hostname = "localhost";
const PORT = process.env.PORT || 1000;
// VARIABLE
const app = express();
// PACKAGES PASSING PARAMETERS
app.use(logger("dev"));
app.use(express.json());
app.use(express.json({ extended: false }));
app.use(cors());
// app.use(passport.initialize());
app.use(express.static(__dirname + "/public"));
// USER DEFINED PACKAGES
setJWTStrategy();
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
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
// const server = http.createServer(app);
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
