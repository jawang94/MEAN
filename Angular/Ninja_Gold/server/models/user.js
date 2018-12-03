var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    username: { type: String, default: "Player" },
    score: { type: Number, default: 0 }
  },
  { timestamps: true }
);
var User = mongoose.model("User", UserSchema);

module.exports = User;
