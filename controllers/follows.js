const Follows = require("../models").follows;
const Articles = require("../models").articles;
const User = require("../models").users;

exports.index = (req, res) => {
  Follows.findAll({
    attributes: ["id", "user_id", "following_user_id", "createdAt"]
  }).then(follows => res.send(follows));
};

exports.show = (req, res) => {
  Follows.findOne({
    where: { id: req.params.id },
    attributes: ["id", "user_id", "following_user_id", "createdAt"]
  }).then(follows => res.send(follows));
};

exports.store = (req, res) => {
  Follows.create(req.body).then(follows => {
    res.send({
      message: "success",
      follows
    });
  });
};

exports.update = (req, res) => {
  Follows.update(req.body, { where: { id: req.params.id } }).then(follows => {
    res.send({
      message: "success",
      follows
    });
  });
};

exports.delete = (req, res) => {
  Follows.destroy({ where: { id: req.params.id } }).then(follows => {
    res.send({
      message: "success",
      follows
    });
  });
};
