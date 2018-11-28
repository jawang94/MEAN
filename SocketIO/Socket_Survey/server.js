var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
const server = app.listen(8000, function() {
  console.log("Listening on Port 8000");
});
const io = require("socket.io")(server);

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "wangsocket",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on("connection", function(socket) {
  socket.on("posting_form", function(data) {
    console.log(data);
    var userData = `Name: ${data.name} Dojo: ${data.dojo} Language: ${
      data.language
    } Comment: ${data.comment}`;
    var num = Math.floor(Math.random() * 1000);
    socket.emit("updated_message", {
      userData:
        "You emitted the following information to the server: " + userData,
      message: "Your lucky number emitted by the server is: " + num
    });
  });
});

app.get("/", function(req, res) {
  res.render("index");
});
