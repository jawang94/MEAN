const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());

require("./server/config/routes.js")(app);

app.all("*", (req, res, next) => {
  console.log("triggered all");
  res.sendFile(path.resolve("./public/dist/public/index.html"));
});

app.listen(8000, function() {
  console.log("Server listening on port 8000");
});
