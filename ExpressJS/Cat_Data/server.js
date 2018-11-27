var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/cats", function(request, response) {
  response.render("cats");
});
app.get("/cat1", function(request, response) {
  response.render("cat1");
});
app.get("/cat2", function(request, response) {
  response.render("cat2");
});
app.get("/cat3", function(request, response) {
  response.render("cat3");
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
