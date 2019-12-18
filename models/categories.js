'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    categories.hasMany(models.articles, {
      as: 'articlesId',
      foreignKey: 'category_id'
    })
  };
  return categories;
};