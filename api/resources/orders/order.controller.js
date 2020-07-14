const express = require("express");
const Order = require('./order.model');
const Cart = require('../cart/cart.model');
const orderRouter = express.Router();



/* 
get orders list
*/
orderRouter.route("/").get(async (req, res, next) => {
    try {
      const order1 = await Order.find();
      return res.json(order1);
      // if(order1.length > 0) {
        
      // } else {
      //   return res.json(null);
      // }

    } catch (error) {
      return res.json(error);
    }
  });     


/* 
Save order
*/
orderRouter.route("/").post(async (req, res, next) => {
    try {
      const order1 = await Order.create(req.body);
      const cart = await Cart.remove();
      return res.json(order1);

    } catch (error) {
      return res.json(error);
    }
  });
  
  module.exports = orderRouter;