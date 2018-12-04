var mongoose = require("mongoose");

var CakeSchema = new mongoose.Schema(
  {
    baker: { type: String, required: true, minlength: 1 },
    imageURL: { type: String, required: true },
    reviews: { type: Array }
  },
  { timestamps: true }
);
var Cake = mongoose.model("Cake", CakeSchema);

module.exports = Cake;
