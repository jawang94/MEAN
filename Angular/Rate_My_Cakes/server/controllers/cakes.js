const mongoose = require("mongoose"),
  Cake = mongoose.model("Cake");

module.exports = {
  index: function(req, res) {
    Cake.find({}, function(err, cakes) {
      if (err) {
        console.log("Returned error", err);
        res.json({ message: "Error", error: err });
      } else {
        res.json({ message: "Success", data: cakes });
      }
    });
  },
  new: function(req, res) {
    console.log("got the new cake order!", req.body);
    var cake = new Cake({
      baker: req.body.baker,
      imageURL: req.body.imageURL
    });
    cake
      .save()
      .then(item => {
        res.redirect("/cakes");
      })
      .catch(err => {
        res.redirect("/cakes");
      });
  },
  show: function(req, res) {
    Cake.find({ _id: req.params.id }, function(err, cake) {
      if (err) {
        console.log("Returned error", err);
        res.json({ message: "Error", error: err });
      } else {
        res.json({ message: "Success", data: cake });
      }
    });
  },
  update: function(req, res) {
    console.log("got that edit request", req.body);
    Cake.updateOne(
      { _id: req.params.id },
      {
        $push: {
          reviews: {
            comment: req.body.comment,
            rating: req.body.rating
          }
        }
      }
    )
      .then(item => {
        res.redirect("/cakes");
      })
      .catch(err => {
        console.log("Returned error", err);
        res.json({ message: "Error", error: err });
      });
  }
};
