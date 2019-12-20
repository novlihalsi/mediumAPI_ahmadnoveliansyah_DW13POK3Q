require("express-group-routes");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const { authenticated } = require("./middleware");

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const AuthController = require("./controllers/auth");
const CategoriesController = require("./controllers/categories");
const ArticlesController = require("./controllers/articles");

app.group("/api/v1", router => {
  // endpoint articles
  router.get("/articles", ArticlesController.index);
  router.get("/articles/:id", ArticlesController.show);
  router.get("/articles/:id/detailarticles", ArticlesController.detailarticles);
  router.post("/articles", authenticated, ArticlesController.store);
  router.patch("/articles/:id", authenticated, ArticlesController.update);
  router.delete("/articles/:id", authenticated, ArticlesController.delete);

  // endpoint categories
  router.get("/categories", CategoriesController.index);
  router.get("/categories/:id/showarticles", CategoriesController.showArticles);
  router.get("/categories/:id", CategoriesController.show);
  router.post("/categories", authenticated, CategoriesController.store);
  router.patch("/categories/id", authenticated, CategoriesController.update);
  router.delete("/categories", authenticated, CategoriesController.delete);

  //get token
  router.post("/login", AuthController.login);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
