'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
    {
      name: 'sport',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'movies',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'book',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'animal',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'car',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    
    ])
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
