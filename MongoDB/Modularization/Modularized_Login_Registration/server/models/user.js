var mongoose = require("mongoose");
require("mongoose-type-email");

var UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true, minlength: 1 },
  last_name: { type: String, required: true, minlength: 1 },
  email: { type: mongoose.SchemaTypes.Email, required: true },
  password: { type: String, minlength: 6 }
});
var User = mongoose.model("User", UserSchema);

module.exports = User;
