const mongoose = require("mongoose");
// import { number } from "joi";
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
var Product = mongoose.model("product", ProductSchema);
module.exports = Product;
