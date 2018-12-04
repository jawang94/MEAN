const mongoose = require("mongoose"),
  Task = mongoose.model("Task");

module.exports = {
  index: function(req, res) {
    Task.find({}, function(err, tasks) {
      if (err) {
        console.log("Returned error", err);
        res.json({ message: "Error", error: err });
      } else {
        res.json({ message: "Success", data: tasks });
      }
    });
  },
  new: function(req, res) {
    console.log("got the request", req.body);
    var task = new Task({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed
    });
    task
      .save()
      .then(item => {
        res.redirect("/tasks");
      })
      .catch(err => {
        res.redirect("/tasks");
      });
  },
  remove: function(req, res) {
    Task.deleteOne({ _id: req.params.id })
      .then(function() {
        res.redirect("/tasks");
      })
      .catch(err => {
        console.log("Returned error", err);
        res.json({ message: "Error", error: err });
      });
  },
  show: function(req, res) {
    Task.find({ _id: req.params.id }, function(err, task) {
      if (err) {
        console.log("Returned error", err);
        res.json({ message: "Error", error: err });
      } else {
        res.json({ message: "Success", data: task });
      }
    });
  },
  update: function(req, res) {
    console.log("got that edit request", req.body);
    Task.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          completed: req.body.completed
        }
      }
    )
      .then(item => {
        res.redirect("/tasks");
      })
      .catch(err => {
        console.log("Returned error", err);
        res.json({ message: "Error", error: err });
      });
  }
};
