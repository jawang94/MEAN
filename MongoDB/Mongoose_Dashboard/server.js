var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
const flash = require("express-flash");
var session = require("express-session");
app.use(
  session({
    secret: "supersecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

const server = app.listen(8000, function() {
  console.log("Listening on port 8000");
});

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/mongoose_dashboard",
  { useNewUrlParser: true }
);
var AnimalSchema = new mongoose.Schema({
  animal: { type: String, required: true, minlength: 1 },
  name: { type: String, required: true, minlength: 2 }
});
mongoose.model("Animal", AnimalSchema);
var Animal = mongoose.model("Animal");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(flash());

app.get("/", function(req, res) {
  Animal.find({}, function(err, animals) {
    if (err) {
      res.render("index", {
        err: err
      });
    } else if (animals) {
      res.render("index", {
        animals: animals
      });
    }
  });
});

app.get("/mongooses/new", function(req, res) {
  res.render("form");
});

app.get("/mongooses/:id", function(req, res) {
  Animal.find({ _id: req.params.id }, function(err, animal) {
    if (err) {
      res.redirect("index", {
        err: err
      });
    } else if (animal) {
      console.log(animal);
      res.render("show", {
        animal: animal
      });
    }
  });
});

app.get("/mongooses/edit/:id", function(req, res) {
  console.log(req.params.id);
  res.render("edit", {
    id: req.params.id
  });
});

var animalId = 0;

app.post("/mongooses", function(req, res) {
  console.log("Post Data: ", req.body);
  var animal = new Animal({
    animal: req.body.animal,
    name: req.body.name
  });
  animal
    .save()
    .then(item => {
      animalId++;
      res.redirect("/");
    })
    .catch(err => {
      for (var key in err.errors) {
        req.flash("registration", err.errors[key].message);
      }
      res.redirect("/mongooses/new");
    });
});

app.post("/mongooses/:id", function(req, res) {
  console.log("Updating " + req.params.id);
  Animal.updateOne(
    { _id: req.params.id },
    { $set: { animal: req.body.animal, name: req.body.name } }
  )
    .then(item => {
      res.redirect("/");
    })
    .catch(err => {
      for (var key in err.errors) {
        req.flash("registration", err.errors[key].message);
      }
      res.redirect("/mongooses/edit/" + req.params.id);
    });
});

app.get("/mongooses/destroy/:id", function(req, res) {
  Animal.deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      for (var key in err.errors) {
        req.flash("registration", err.errors[key].message);
      }
      res.redirect("/mongooses/" + req.params.id);
    });
});
