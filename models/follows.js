'use strict';
module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define('follows', {
    user_id: DataTypes.INTEGER,
    following_user_id: DataTypes.INTEGER
  }, {});
  follow.associate = function(models) {
    // associations can be defined here
  };
  return follow;
};