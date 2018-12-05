const controllers = require("../controllers/authors.js");

module.exports = function(app) {
  app
    .get("/api/authors", controllers.index)
    .get("/api/authors/:id", controllers.show)
    .post("/api/authors", controllers.new)
    .put("/api/authors/:id", controllers.update)
    .delete("/api/authors/:id", controllers.deleteOne);
};
