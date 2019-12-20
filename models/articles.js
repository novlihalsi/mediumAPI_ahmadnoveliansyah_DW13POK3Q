"use strict";
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define(
    "articles",
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      image: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      is_published: DataTypes.BOOLEAN,
      is_archived: DataTypes.BOOLEAN,
      author_id: DataTypes.INTEGER
    },
    {}
  );
  articles.associate = function(models) {
    // associations can be defined here
    articles.belongsTo(models.categories, {
      as: "categoriesId",
      foreignKey: "category_id"
    });
    articles.belongsTo(models.users, {
      as: "usersId",
      foreignKey: "author_id"
    });
    articles.hasMany(models.comments, {
      as: "commentId",
      foreignKey: "article_id"
    });
  };
  return articles;
};
