const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));

const server = app.listen(1337);
const io = require("socket.io")(server);
var counter = 0;

io.on("connection", function(socket) {
  counter++;
  socket.on("thankyou", function(data) {
    console.log(data.msg, counter);
  });
  socket.emit("greeting", {
    msg: "Greetings, from server Node, brought to you by Sockets! -Server"
  });
  socket.on("click", function(data) {
    console.log(data.msg);
    socket.emit("confirm", {
      gotcha: "We got your click! - Server"
    });
  });
});
