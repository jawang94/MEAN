var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
const flash = require("express-flash");
var session = require("express-session");
app.use(
  session({
    secret: "sosecretive",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

const server = app.listen(8000, function() {
  console.log("listening on port 8000");
});
const io = require("socket.io")(server);

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/quoting_dojo",
  { useNewUrlParser: true }
);
var QuoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    quote: { type: String, required: true, minlength: 1, maxlength: 100 }
  },
  { timestamps: true }
);
mongoose.model("Quote", QuoteSchema);
var Quote = mongoose.model("Quote");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(flash());

io.on("connection", function(socket) {
  console.log(socket.id + " has connected!");
  socket.emit("confirm");
});

app.get("/", function(req, res) {
  res.render("index");
});
app.post("/quotes", function(req, res) {
  console.log("POST DATA", req.body);
  var quote = new Quote({ name: req.body.name, quote: req.body.quote });
  quote
    .save()
    .then(item => {
      res.redirect("/quotes");
    })
    .catch(err => {
      for (var key in err.errors) {
        req.flash("registration", err.errors[key].message);
      }
      res.redirect("/");
    });
});
app.get("/quotes", function(req, res) {
  Quote.find({}, function(err, quotes) {
    if (err) {
      res.render("quotes", {
        err: err
      });
    } else if (quotes) {
      res.render("quotes", {
        quotes: quotes
      });
    }
  });
});
