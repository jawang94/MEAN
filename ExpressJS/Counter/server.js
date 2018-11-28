var express = require("express");
var app = express();
var session = require("express-session");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(
  session({
    secret: "wangerino",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

app.get("/", function(req, res) {
  if (!req.session.count) {
    req.session.count = 0;
  }
  req.session.count += 1;
  console.log(req.session.count);
  res.render("index");
});

app.get("/count", function(req, res) {
  res.render("counter", { count: req.session.count });
});

app.get("/reset", function(req, res) {
  if (req.session.count) {
    req.session.count = 0;
    res.redirect("/count");
  } else {
    res.redirect("/");
  }
});

app.listen(8000, function() {
  console.log("Listening on port 8000");
});
