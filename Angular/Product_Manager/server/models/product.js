var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 4 },
    price: { type: String, required: true },
    imageURL: { type: String, required: false }
  },
  { timestamps: true }
);
var Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
