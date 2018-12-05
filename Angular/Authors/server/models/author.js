const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/authors_db",
  { useNewUrlParser: true }
);

var AuthorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3 }
  },
  { timestamps: true }
);
var Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
