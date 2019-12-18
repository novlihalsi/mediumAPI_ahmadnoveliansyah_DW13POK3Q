'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        fullname: 'Ahmad Noveliansyah',
        username:'novlihalsi',
        email:'ahmadnovli@gmail.com',
        password:'admin',
        is_active:true,
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
