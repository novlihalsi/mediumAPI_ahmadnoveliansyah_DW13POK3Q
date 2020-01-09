const Articles = require("../models").articles;
const Users = require("../models").users;
const Categories = require("../models").categories;
const Comments = require("../models").comments;

exports.index = (req, res) => {
  Articles.findAll({
    include: [
      { model: Users, as: "usersId" },
      { model: Categories, as: "categoriesId" }
    ]
  })
    .then(articles => res.send(articles))
    .catch(e => res.send(e));
};

exports.related = (req, res) => {
  Articles.findAll({
    where: { category_id: req.params.id },
    include: [
      { model: Users, as: "usersId", attributes: ["fullname"] },
      {
        model: Categories,
        as: "categoriesId"
      },
      {
        model: Comments,
        as: "commentId",
        include: [
          { model: Users, as: "usersComment", attributes: ["fullname"] }
        ]
      }
    ]
  }).then(articles => res.send(articles));
};

exports.show = (req, res) => {
  Articles.findOne({ where: { id: req.params.id } }).then(articles =>
    res.send(articles)
  );
};

exports.detailarticles = (req, res) => {
  Articles.findOne({
    where: { id: req.params.id },
    include: [
      { model: Users, as: "usersId", attributes: ["fullname"] },
      {
        model: Categories,
        as: "categoriesId"
      },
      {
        model: Comments,
        as: "commentId",
        include: [
          { model: Users, as: "usersComment", attributes: ["fullname"] }
        ]
      }
    ]
  }).then(articles => res.send(articles));
};

exports.store = (req, res) => {
  Articles.create(req.body).then(articles => {
    res.send({
      message: "success",
      articles
    });
  });
};

exports.update = (req, res) => {
  Articles.update(req.body, { where: { id: req.params.id } }).then(articles => {
    res.send({
      message: "success",
      articles
    });
  });
};

exports.delete = (req, res) => {
  Articles.destroy({ where: { id: req.params.id } }).then(articles => {
    res.send({
      message: "success",
      articles
    });
  });
};
