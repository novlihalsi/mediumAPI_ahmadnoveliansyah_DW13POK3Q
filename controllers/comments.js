const Comments = require("../models").comments;
const Articles = require("../models").articles;
const User = require("../models").users;

exports.index = (req, res) => {
  Comments.findAll({
    attributes: ["id", "comment", "article_id", "user_id", "createdAt"]
  }).then(comments => res.send(comments));
};

exports.commentbyarticle = (req, res) => {
  Comments.findAll({
    where: { article_id: req.params.id },
    include: [{ model: User, as: "usersComment", attributes: ["fullname"] }],
    attributes: ["id", "comment", "article_id", "user_id", "createdAt"]
  }).then(comments => res.send(comments));
};

exports.show = (req, res) => {
  Comments.findOne({
    where: { id: req.params.id },
    attributes: ["id", "comment", "article_id", "user_id", "createdAt"]
  }).then(comments => res.send(comments));
};

exports.store = (req, res) => {
  Comments.create(req.body).then(comments => {
    res
      .send({
        message: "success",
        comments
      })
      .catch(err => res.send(err));
  });
};

exports.update = (req, res) => {
  Comments.update(req.body, { where: { id: req.params.id } }).then(comments => {
    res
      .send({
        message: "success",
        comments
      })
      .catch(e => res.send(e));
  });
};

exports.delete = (req, res) => {
  Comments.destroy({ where: { id: req.params.id } }).then(comments => {
    res.send({
      message: "success",
      comments
    });
  });
};
