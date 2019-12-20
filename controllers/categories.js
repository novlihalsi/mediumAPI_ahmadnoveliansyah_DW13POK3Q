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

exports.store = (req, res) => {
  Category.create(req.body).then(categories => {
    res.send({
      message: "success",
      categories
    });
  });
};

exports.update = (req, res) => {
  Category.update(req.body, { where: { id: req.params.id } }).then(
    categories => {
      res.send({
        message: "success",
        categories
      });
    }
  );
};

exports.delete = (req, res) => {
  Category.destroy({ where: { id: req.params.id } }).then(categories => {
    res.send({
      message: "success",
      categories
    });
  });
};
