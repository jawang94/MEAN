const mongoose = require("mongoose"),
  User = mongoose.model("User");

module.exports = {
  index: function(req, res) {
    User.find({}, function(err, users) {
      if (err) {
        console.log("Returned error", err);
        res.json({ message: "Error", error: err });
      } else {
        res.json({ message: "Success", data: users });
      }
    });
  },
  new: function(req, res) {
    var user = new User({
      name: req.params.name
    });
    user
      .save()
      .then(item => {
        res.redirect("/");
      })
      .catch(err => {
        res.redirect("/");
      });
  },
  remove: function(req, res) {
    User.deleteOne({ name: req.params.name })
      .then(function() {
        res.redirect("/");
      })
      .catch(err => {
        console.log("Returned error", err);
        res.json({ message: "Error", error: err });
      });
  },
  show: function(req, res) {
    User.find({ name: req.params.name }, function(err, user) {
      if (err) {
        console.log("Returned error", err);
        res.json({ message: "Error", error: err });
      } else {
        res.json({ message: "Success", data: user });
      }
    });
  }
};
