"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Comments", [
      {
        is_published: true,
        is_archived: false,
        article_id: 2,
        user_id: 1,
        comment: "hello bro",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        is_published: true,
        is_archived: false,
        article_id: 2,
        user_id: 1,
        comment: "keren bro",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        is_published: true,
        is_archived: false,
        article_id: 2,
        user_id: 1,
        comment: "mantul bro",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        is_published: true,
        is_archived: false,
        article_id: 2,
        user_id: 1,
        comment: "luar biasa",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
