"use strict";
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "comments",
    {
      is_published: DataTypes.BOOLEAN,
      is_archived: DataTypes.BOOLEAN,
      article_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      comment: DataTypes.STRING
    },
    {}
  );
  comment.associate = function(models) {
    comment.belongsTo(models.articles, {
      as: "articlesId",
      foreignKey: "article_id"
    });
    comment.belongsTo(models.users, {
      as: "usersComment",
      foreignKey: "user_id"
    });
  };
  return comment;
};
