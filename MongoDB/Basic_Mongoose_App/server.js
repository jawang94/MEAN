var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
const flash = require("express-flash");
var session = require("express-session");
app.use(
  session({
    secret: "wickedsecretdoe",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

const server = app.listen(8000, function() {
  console.log("listening on port 8000");
});

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/basic_mongoose",
  { useNewUrlParser: true }
);
var UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 6 },
    age: { type: Number, required: true, min: 1, max: 150 }
  },
  { timestamps: true }
);
mongoose.model("User", UserSchema);
var User = mongoose.model("User");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(flash());

app.get("/", function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      res.render("index", {
        err: err.errors
      });
    } else if (users) {
      res.render("index", {
        users: users
      });
    }
  });
});
app.post("/users", function(req, res) {
  console.log("POST DATA", req.body);
  var user = new User({ name: req.body.name, age: req.body.age });
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
});
