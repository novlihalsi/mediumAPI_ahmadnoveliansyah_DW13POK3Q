'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
      {
        title: 'The 4 questions you should stop asking during your one-on-one meetings',
        category_id:3,
        is_published:true,
        is_archived:false,
        author_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The 4 questions you should stop asking during your one-on-one meetings',
        category_id:2,
        is_published:true,
        is_archived:false,
        author_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The 4 questions you should stop asking during your one-on-one meetings',
        category_id:1,
        is_published:true,
        is_archived:false,
        author_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The 4 questions you should stop asking during your one-on-one meetings',
        category_id:2,
        is_published:true,
        is_archived:false,
        author_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The 4 questions you should stop asking during your one-on-one meetings',
        category_id:4,
        is_published:true,
        is_archived:false,
        author_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The 4 questions you should stop asking during your one-on-one meetings',
        category_id:5,
        is_published:true,
        is_archived:false,
        author_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The 4 questions you should stop asking during your one-on-one meetings',
        category_id:2,
        is_published:true,
        is_archived:false,
        author_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The 4 questions you should stop asking during your one-on-one meetings',
        category_id:4,
        is_published:true,
        is_archived:false,
        author_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The 4 questions you should stop asking during your one-on-one meetings',
        category_id:2,
        is_published:true,
        is_archived:false,
        author_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The 4 questions you should stop asking during your one-on-one meetings',
        category_id:1,
        is_published:true,
        is_archived:false,
        author_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The 4 questions you should stop asking during your one-on-one meetings',
        category_id:5,
        is_published:true,
        is_archived:false,
        author_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The 4 questions you should stop asking during your one-on-one meetings',
        category_id:2,
        is_published:true,
        is_archived:false,
        author_id:1,
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


