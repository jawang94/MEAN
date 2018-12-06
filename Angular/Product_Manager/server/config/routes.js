var controllers = require("../controllers/productController.js");

module.exports = function(app) {
  app.get("/product", function(req, res) {
    controllers.index(req, res);
  });
  app.get("/product/:id", function(req, res) {
    controllers.show(req, res);
  });
  app.post("/product", function(req, res) {
    controllers.new(req, res);
  });
  app.put("/product/:id", function(req, res) {
    controllers.update(req, res);
  });
  app.delete("/product/delete/:id", function(req, res) {
    controllers.delete(req, res);
  });
};
