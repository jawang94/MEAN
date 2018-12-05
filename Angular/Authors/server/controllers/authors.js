const mongoose = require("mongoose");
// const Author = mongoose.model("Author");
const Author = require("../models/author");

module.exports = {
  index: function(req, res) {
    Author.find({}, function(err, authors) {
      if (err) {
        console.log("Returned error", err);
        res.json({ message: "Error", error: err });
      } else {
        res.json({ message: "Success", data: authors });
      }
    });
  },

  new: function(req, res) {
    console.log("Got the new author!", req.body);
    var author = new Author({
      name: req.body.name
    });
    author
      .save()
      .then(item => {
        res.redirect("/authors");
      })
      .catch(err => {
        res.redirect("/authors");
      });
  },

  deleteOne: (req, res) => {
    console.log("hitting the controller remove");
    Author.remove({ _id: req.params.id })
      .then(() => {
        console.log("deleted");
        res.redirect("/");
      })
      .catch(err => {
        console.log("Returned error", err);
        res.json({ message: "Error", error: err });
      });
  },

  show: function(req, res) {
    Author.find({ _id: req.params.id }, function(err, author) {
      if (err) {
        console.log("Returned error", err);
        res.json({ message: "Error", error: err });
      } else {
        res.json({ message: "Success", data: author });
      }
    });
  },

  update: function(req, res) {
    Author.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name
        }
      }
    )
      .then(item => {
        res.redirect("/authors");
      })
      .catch(err => {
        console.log("Returned error", err);
        res.json({ message: "Error", error: err });
      });
  }
};
