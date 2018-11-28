var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const server = app.listen(8000, function() {
  console.log("Listening on Port 8000");
});
const io = require("socket.io")(server);

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

var count = 0;

io.on("connection", function(socket) {
  socket.on("button_click", function(data) {
    count++;
    socket.emit("confirm_click", {
      count: count
    });
  });
  socket.on("reset", function(data) {
    count = 0;
    socket.emit("confirm_reset", {
      count: count
    });
  });
});

app.get("/", function(req, res) {
  res.render("index");
});
