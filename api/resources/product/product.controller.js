const express = require("express");

const HttpClient = require("http-status-code");
const Product = require("./product.model");

const ProductRouter = express.Router();

  /* 
  This function is used to load all the medicine
  counter in cart for the corresponding user

  */
  ProductRouter.route('/').get((req, res, next) => {
    console.log("Product GET OPERATION is Called");
    Product.find({})
      .then(
        (products) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(products);
        },
        (err) => next(err)
      )
      .catch((error) => next(error));
  });

  ProductRouter.route('/').post ((req, res, next) => {
    console.log(req.body);

    Product.findOne({ name: req.body.name })
      .then((product) => {
        if (product != null) {
          var err = new Error("User " + req.body.name + " already exist.");
          err.status = 403;
          next(err);
        } else {
          return Product.create(req.body);
        }
      })
      .then(
        (product) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ status: "Registered Successful", product: product });
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });


  
  ProductRouter.route('/:category').get((req, res, next) => {
    console.log("Product GET OPERATION is Called");
    Product.find({category: req.params.category})
      .then(
        (products) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(products);
        },
        (err) => next(err)
      )
      .catch((error) => next(error));
  });

  /* 
  This function is used to load all the medicines
  of cart of the corresponding user

  */
  // async getMedicineInCart(req, res, next) {
  //   console.log("getting medicnes from cart");
  //   try {
  //     const userId = req.params.userId;
  //     const totalMedCart = await Cart.find({ userId: userId });
  //     console.log(totalMedCart);
  //     var array = [];
  //     var counter = 0;
  //     for (let cart of totalMedCart) {
  //       console.log(cart.userId);
  //       const store = await Store.findOne({ _id: cart.storeId });
  //       const medicine = await Medicine.findOne({ _id: cart.medicineId });
  //       const inventory = await Inventory.findOne({
  //         store_id: cart.storeId,
  //         medicine_id: cart.medicineId,
  //       });
  //       array[counter] = {
  //         _id: cart._id,
  //         medicinename: medicine.medicinename,
  //         formula: medicine.formula,
  //         format: medicine.format,
  //         ingredients: medicine.ingredients,
  //         quantity: cart.quantity,
  //         price: inventory.price,
  //         name: store.name,
  //         storeId: store._id,
  //       };

  //       console.log(medicine);
  //       console.log(inventory);
  //       console.log(array[counter]);
  //       counter += 1;
  //     }

  //     if (counter !== 0) {
  //       return res.json(array);
  //     } else {
  //       return res.json(null);
  //     }
  //   } catch (error) {
  //     return res.status(HttpClient.INTERNAL_SERVER_ERROR).json(error);
  //   }
  // },

  /* 
  In this function, we are updating the cart
  by using the cartId
  */
  // async updateCart(req, res, next) {
  //   console.log("Updating the Cart");
  //   try {
  //     const cartId = req.params.cartId;
  //     const cart = await Cart.findOne({ _id: cartId });
  //     console.log(cart);
  //     if (cart) {
  //       const updateCart = await Cart.findByIdAndUpdate(
  //         { _id: cartId },
  //         { $set: req.body },
  //         { new: true }
  //       );
  //       if (updateCart) {
  //         res.json(updateCart);
  //       } else {
  //         res.json({ status: "Error to update cart" });
  //       }
  //     } else {
  //       res
  //         .status(HttpClient.BAD_REQUEST)
  //         .res.json({ status: "Invalid Cart ID" });
  //     }
  //   } catch (error) {
  //     return res.status(HttpClient.INTERNAL_SERVER_ERROR).json(error);
  //   }
  // },

  /* 
This is function to remove one medicine from the cart
 */

  //   async removeOneMedicineFromCart(req, res, next) {
  //     console.log("Removing One Medicine From the Cart");
  //     try {
  //       const { userId, cartId } = req.params;

  //       const removeonecart = await Cart.remove({ _id: cartId, userId: userId });
  //       console.log(removeonecart);
  //       return res.json(null);
  //     } catch (error) {
  //       return res.status(HttpClient.INTERNAL_SERVER_ERROR).json(error);
  //     }
  //   },

module.exports = ProductRouter;