const Users = require("../models").users;
const Articles = require("../models").articles;

exports.index = (req, res) => {
  Users.findAll().then(users => res.send(users));
};

exports.articlebyperson = (req, res) => {
  Users.findOne({
    where: { id: req.params.id },
    include: [{ model: Articles, as: "articlesId" }]
  }).then(users => res.send(users));
};

exports.show = (req, res) => {
  Users.findOne({
    where: { id: req.params.id }
  }).then(users => res.send(users));
};

exports.register = (req, res) => {
  Users.create(req.body).then(users => {
    res.send({
      message: "success",
      users
    });
  });
};

exports.update = (req, res) => {
  Users.update(req.body, { where: { id: req.params.id } }).then(users => {
    res.send({
      message: "success",
      users
    });
  });
};

exports.delete = (req, res) => {
  Users.destroy({ where: { id: req.params.id } }).then(users => {
    res.send({
      message: "success",
      users
    });
  });
};
