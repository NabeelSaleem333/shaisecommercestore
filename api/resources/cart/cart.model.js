const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
    userId: {
      type: String,
      required: true,
    }
}); 

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
