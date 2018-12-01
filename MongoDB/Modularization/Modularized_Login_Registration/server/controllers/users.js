const mongoose = require("mongoose"),
  User = mongoose.model("User");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

module.exports = {
  index: function(req, res) {
    res.render("index");
  },
  home: function(req, res) {
    console.log(req.params.id);
    User.find({ _id: req.params.id }, function(err, user) {
      if (err) {
        res.redirect("/");
      } else if (user) {
        res.render("home", {
          user: user
        });
      }
    });
  },
  login: function(req, res) {
    User.find({ email: req.body.email }, function(err, user) {
      if (err) {
        res.redirect("/");
      } else if (user) {
        console.log(user);
        console.log(user[0].password);
        bcrypt
          .compare(req.body.password, user[0].password)
          .then(result => {
            res.redirect("/home" + user[0]._id);
          })
          .catch(error => {
            res.redirect("/");
          });
      }
    });
  },
  register: function(req, res) {
    if (req.body.password !== req.body.confirm_password) {
      res.redirect("/");
    } else {
      var hash = bcrypt.hashSync(req.body.password, salt);
      var user = new User({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: hash
      });
      user
        .save()
        .then(item => {
          res.redirect("/");
        })
        .catch(err => {
          for (var key in err.errors) {
            req.flash("registration", err.errors[key].message);
          }
          res.redirect("/");
        });
    }
  }
};
