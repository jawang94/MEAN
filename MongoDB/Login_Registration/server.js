var express = require("express");
var app = express();
var mongoose = require("mongoose");
require("mongoose-type-email");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var bodyParser = require("body-parser");
var path = require("path");
const flash = require("express-flash");
var session = require("express-session");
app.use(
  session({
    secret: "loginregsecret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

const server = app.listen(8000, function() {
  console.log("Server listening on port 8000");
});

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/login_registration",
  { useNewUrlParser: true }
);
var UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true, minlength: 1 },
  last_name: { type: String, required: true, minlength: 1 },
  email: { type: mongoose.SchemaTypes.Email, required: true },
  password: { type: String, minlength: 6 }
});

mongoose.model("User", UserSchema);
var User = mongoose.model("User");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/static")));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(flash());

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/home:id", function(req, res) {
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
});

app.post("/login", function(req, res) {
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
});

app.post("/register", function(req, res) {
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
});
