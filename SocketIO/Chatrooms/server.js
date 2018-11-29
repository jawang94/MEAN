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
    secret: "wangkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

var users = [];
var id = 0;

function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele != value;
  });
}

io.on("connection", function(socket) {
  socket.on("got_a_new_user", function(data) {
    console.log(data.name, data.id);
    let user_id = data.id;
    users.push({ name: data.name, id: user_id });
    io.emit("new_user", {
      users: users,
      id: socket.id
    });
  });

  socket.on("disconnect", function(data) {
    console.log("Disconnecting User " + socket.id);
    socket.broadcast.emit("disconnect_user", {
      id: socket.id
    });
  });
});

app.get("/", function(req, res) {
  req.session.userID = id;
  id++;
  res.render("index", {
    id: req.session.userID
  });
});
