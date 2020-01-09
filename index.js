require("express-group-routes");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const { authenticated } = require("./middleware");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const AuthController = require("./controllers/auth");
const CategoriesController = require("./controllers/categories");
const ArticlesController = require("./controllers/articles");
const CommentController = require("./controllers/comments");
const FollowController = require("./controllers/follows");
const UserController = require("./controllers/users");

app.group("/api/v1", router => {
  // endpoint articles
  router.get("/articles", ArticlesController.index);
  router.get("/articles/:id", ArticlesController.show);
  router.get("/articles/:id/detailarticles", ArticlesController.detailarticles);
  router.get("/articles/:id/related", ArticlesController.related);
  router.post("/articles", authenticated, ArticlesController.store);
  router.put("/articles/:id", authenticated, ArticlesController.update);
  router.delete("/articles/:id", authenticated, ArticlesController.delete);

  // endpoint categories
  router.get("/categories", CategoriesController.index);
  router.get("/categories/:id/showarticles", CategoriesController.showArticles);
  router.get("/categories/:id", CategoriesController.show);
  router.post("/categories", authenticated, CategoriesController.store);
  router.put("/categories/:id", CategoriesController.update);
  router.delete("/categories", authenticated, CategoriesController.delete);

  // endpoint comment
  router.get("/comment", CommentController.index);
  router.get("/comment/:id/articles", CommentController.commentbyarticle);
  router.get("/comment/:id", CommentController.show);
  router.post("/comment", CommentController.store);
  router.put("/comment/:id", CommentController.update);
  router.delete("/comment", CommentController.delete);

  // endpoint follows
  router.get("/follow", FollowController.index);
  router.get("/follow/:id", FollowController.show);
  router.post("/follow", FollowController.store);
  router.put("/follow/:id", FollowController.update);
  router.delete("/follow", FollowController.delete);

  //endpoint user
  router.get("/user", UserController.index);
  router.get("/user/:id", UserController.show);
  router.get("/user/:id/articleperson", UserController.articlebyperson);
  router.post("/register", UserController.register);
  router.put("/user/:id", UserController.update);
  router.delete("/user", UserController.delete);

  //get token
  router.post("/login", AuthController.login);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
