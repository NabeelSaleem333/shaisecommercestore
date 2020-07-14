const express = require("express");
const Cart = require("./cart.model");
const Product = require("../product/product.model");
const cartRouter = express.Router();

/* 
TO GET CART FROM THE DATABASE
*/
cartRouter.route("/").get(async (req, res, next) => {
  try {
    const cart = await Cart.find();

    if (cart) {
      var array = [];
      var counter = 0;
      console.log("length", cart.length);
      for (let c of cart) {
        const product = await Product.findOne({ _id: c.productId });
        // console.log(counter, product);

        array[counter] = {
          _id: c._id,
          productId: product._id,
          image: product.image,
          name: product.name,
          weight: product.weight,
          quantity: c.quantity,
          price: product.price,
        };

        console.log(counter, array[counter]);
        counter += 1;
      }
      console.log(array);
      return res.json(array);
    }
  } catch (error) {
    return res.json(error);
  }
});


cartRouter.route("/admin/:userId").get(async (req, res, next) => {
  try {
    console.log("Admin");
    const cart = await Cart.find({userId: req.params.userId});

    if (cart) {
      var array = [];
      var counter = 0;
      console.log("length", cart.length);
      for (let c of cart) {
        const product = await Product.findOne({ _id: c.productId });
        // console.log(counter, product);

        array[counter] = {
          _id: c._id,
          productId: product._id,
          image: product.image,
          name: product.name,
          weight: product.weight,
          quantity: c.quantity,
          price: product.price,
        };

        console.log(counter, array[counter]);
        counter += 1;
      }
      console.log(array);
      return res.json(array);
    }
  } catch (error) {
    return res.json(error);
  }
});



/* 
TO GET CART COUNTER FROM THE DATABASE
*/
cartRouter.route("/count").get((req, res, next) => {
  Cart.find()
    .then((cart) => {
      if (cart.length > 0) {
        return res.json(cart.length);
      }
      return res.json(0);
    })
    .catch((err) => next(err));
});
/* 
TO SAVE CART INTO THE DATABASE
*/
cartRouter.route("/").post(async (req, res, next) => {
  try {
    // const cart2 = await Cart.create(req.body);
    // return res.json(cart2);
    const cart1 = await Cart.findOne({ productId: req.body.productId });
    if (cart1) {
      return res.json(null);
    } else {
      const cart2 = await Cart.create(req.body);
      if (cart2) {
        return res.json(cart2);
      }
    }
  } catch (error) {
    return res.json(error);
  }
});

/* 
This is a function to update the Cart
*/

cartRouter.route("/:cartId").put(async (req, res) => {
  try {
    console.log(req.params.cartId);
    const cart1 = await Cart.findOne({ _id: req.params.cartId });

    if (cart1) {
      const cart2 = await Cart.findOneAndUpdate(
        { _id: req.params.cartId },
        { $set: req.body },
        { new: true }
      );
      if (cart2) {
        // const cart3 = await Cart.find();
        return res.json({ status: "Quantity updated successfully!" });
      } else {
        return res.json({ status: "Quantity not updated!" });
      }
    } else {
      return res.json({ status: "No Item Exist" });
    }
  } catch (error) {
    return res.json(error);
  }
});

/* 
This is a function to remove one Cart
*/

cartRouter.route("/:cartId").delete(async (req, res) => {
  try {
    console.log(req.params.cartId);
    const cart1 = await Cart.findOne({ _id: req.params.cartId });

    if (cart1) {
      const cart2 = await Cart.findOneAndRemove({ _id: req.params.cartId });
      if (cart2) {
        return res.json({ status: "Cart removed successfully!" });
      } else {
        return res.json({ status: "Cart not removed!" });
      }
    } else {
      return res.json({ status: "No Item Exist" });
    }
  } catch (error) {
    return res.json(error);
  }
});

module.exports = cartRouter;
