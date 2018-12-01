var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
const flash = require("express-flash");
var session = require("express-session");
app.use(
  session({
    secret: "messageboardkeybro",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

const server = app.listen(8000, function() {
  console.log("Listening on port 8000");
});

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/message_board",
  { useNewUrlParser: true }
);
var CommentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 1 },
  comment: { type: String, required: true, minlength: 1 }
});
var MessageSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 1 },
  message: { type: String, required: true, minlength: 1 },
  comments: []
});
mongoose.model("Comment", CommentSchema);
mongoose.model("Message", MessageSchema);
var Comment = mongoose.model("Comment");
var Message = mongoose.model("Message");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/static")));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(flash());

app.get("/", function(req, res) {
  Message.find({}, function(err, messages) {
    if (err) {
      res.render("index", {
        err: err
      });
    } else if (messages) {
      res.render("index", {
        messages: messages
      });
    }
  });
});

app.post("/message", function(req, res) {
  var message = new Message({
    name: req.body.name,
    message: req.body.message
  });
  message
    .save()
    .then(item => {
      res.redirect("/");
    })
    .catch(err => {
      for (var key in err.errors) {
        req.flash("registration", err.errors[key].message);
      }
      res.redirect("/");
    });
});

app.post("/comment/:id", function(req, res) {
  console.log(req.body, "Gotcha", req.params.id);
  var comment = new Comment({
    name: req.body.name,
    comment: req.body.comment
  });
  comment
    .save()
    .then(item => {
      Message.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { comments: item } },
        function(err, data) {
          if (err) {
            console.log("Failed");
            res.redirect("/");
          } else {
            console.log("success!");
            res.redirect("/");
          }
        }
      );
    })
    .catch(err => {
      for (var key in err.errors) {
        req.flash("Comment Creation", err.errors[key].message);
      }
      res.redirect("/");
    });
});
