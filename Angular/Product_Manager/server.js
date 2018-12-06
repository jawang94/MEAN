const express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var flash = require("express-flash");
var session = require("express-session");
var path = require("path");

const server = app.listen(8000, function() {
  console.log("Server listening on port 8000");
});

app.use(
  session({
    secret: "loginregsecret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);
app.use(flash());

require("./server/config/mongoose.js");
require("./server/models/product.js");
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());

require("./server/config/routes.js")(app);
app.all("*", (req, res, next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"));
});
