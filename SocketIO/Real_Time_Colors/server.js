var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
const server = app.listen(8000, function() {
  console.log("Listening on port 8000");
});
const io = require("socket.io")(server);

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "sooosecret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on("connection", function(socket) {
  socket.on("green", function(data) {
    io.emit("background-green", {
      color: data.color
    });
  });
  socket.on("blue", function(data) {
    io.emit("background-blue", {
      color: data.color
    });
  });
  socket.on("pink", function(data) {
    io.emit("background-pink", {
      color: data.color
    });
  });
});

app.get("/", function(req, res) {
  res.render("index");
});
