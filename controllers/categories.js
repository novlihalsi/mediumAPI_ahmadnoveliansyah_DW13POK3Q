const Category = require("../models").categories;
const Articles = require("../models").articles;
const User = require("../models").users;

exports.index = (req, res) => {
  Category.findAll({ attributes: ["id", "name"] }).then(categories =>
    res.send(categories)
  );
};

exports.show = (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    attributes: ["id", "name"]
  }).then(categories => res.send(categories));
};

exports.showArticles = (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Articles,
        as: "articlesId",
        include: [{ model: User, as: "usersId" }]
      }
    ]
  }).then(categories => res.send(categories));
};

exports.store = (req, res) => {};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};
