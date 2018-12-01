var users = require("../controllers/tasks.js");

module.exports = function(app) {
  app.get("/tasks", function(req, res) {
    users.index(req, res);
  });
  app.get("/tasks/:id", function(req, res) {
    users.show(req, res);
  });
  app.post("/tasks", function(req, res) {
    users.new(req, res);
  });
  app.put("/tasks/:id", function(req, res) {
    users.update(req, res);
  });
  app.delete("/tasks/:id", function(req, res) {
    users.remove(req, res);
  });
};
