'use strict';

const { read } = require("fs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogs', [
      {
        title: 'Welcome to My Portfolio Blog',
        content: 'This is the first blog post on the portfolio. Stay tuned for updates!',
        imageUrl: 'https://placehold.co/600x400',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Building a Personal Website',
        content: 'Here are some tips and tools I used to build this portfolio.',
        imageUrl: 'https://placehold.co/600x400',
        readTime: "5 min",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blogs', null, {});
  }
};
