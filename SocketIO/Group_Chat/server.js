var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const server = app.listen(8000, function() {
  console.log("Listening on port 8000");
});
const io = require("socket.io")(server);

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

var users = [];

function removeUser(arr, userId) {
  return arr.filter(function(ele) {
    return ele.id != userId;
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

  socket.on("got_a_new_message", function(data) {
    console.log(data.message, data.id);
    let userName;
    users.forEach(element => {
      if (element.id === data.id) {
        userName = element.name;
      }
    });
    io.emit("new_message", {
      message: data.message,
      name: userName
    });
  });

  socket.on("disconnect", function(data) {
    console.log("Disconnecting User " + socket.id);
    let userName;
    users.forEach(element => {
      if (element.id === socket.id) {
        userName = element.name;
      }
    });
    users = removeUser(users, socket.id);
    socket.broadcast.emit("disconnect_user", {
      users: users,
      name: userName
    });
  });
});

app.get("/", function(req, res) {
  res.render("index");
});
