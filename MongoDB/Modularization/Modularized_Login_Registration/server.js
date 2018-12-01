var express = require("express");
var app = express();
var mongoose = require("mongoose");
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

require("./server/config/mongoose.js");
require("./server/models/user.js");
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client/static")));
app.set("views", path.join(__dirname, "/client/views"));
app.set("view engine", "ejs");
app.use(flash());

require("./server/config/routes.js")(app);
