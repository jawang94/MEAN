var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

const server = app.listen(8000, function() {
  console.log("Server listening on port 8000");
});

app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());

app.all("*", (req, res, next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"));
});
