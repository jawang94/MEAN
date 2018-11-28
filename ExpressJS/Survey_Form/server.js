var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "wangtime",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});
app.get("/result", function(req, res) {
  res.render("result", { user: req.session.user });
});

app.post("/submit", function(req, res) {
  var userData = {
    name: req.body.name,
    dojo: req.body.dojo,
    language: req.body.language,
    comment: req.body.comment
  };
  req.session.user = userData;
  res.redirect("/result");
});

app.listen(8000, function() {
  console.log("Listening on port 8000");
});
