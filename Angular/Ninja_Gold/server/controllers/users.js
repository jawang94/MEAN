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
      username: req.body.username,
      score: req.body.score
    });
    user
      .save()
      .then(item => {
        res.redirect("/users");
      })
      .catch(err => {
        res.redirect("/users");
      });
  }
};
