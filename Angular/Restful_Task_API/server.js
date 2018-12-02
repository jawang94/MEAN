var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

const server = app.listen(8000, function() {
  console.log("Server listening on port 8000");
});

require("./server/config/mongoose.js");
require("./server/models/task.js");
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());

require("./server/config/routes.js")(app);
