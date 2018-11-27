var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/cats", function(request, response) {
  response.render("cats");
});

var cat_array = [
  { name: "Robin", food: "Rat", age: "4", sleep: "Trash Can" },
  { name: "Jozy", food: "Treats", age: "2", sleep: "Under the bed" },
  { name: "Biscuit", food: "Biscuit", age: "6", sleep: "Anywhere" }
];

app.get("/cat1", function(request, response) {
  response.render("cat1", { cat: cat_array });
});
app.get("/cat2", function(request, response) {
  response.render("cat2", { cat: cat_array });
});
app.get("/cat3", function(request, response) {
  response.render("cat3", { cat: cat_array });
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
