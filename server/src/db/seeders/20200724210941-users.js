'use strict';

const bcrypt = require('bcrypt');

function generateUsers(){
  const users = [];
  for(let i=1;i<100;i++){
    users.push({
      firstName: `fname${i}`,
      lastName: `lastname${i}`,
      email: `email${i}@mail.com`,
      login:`login#${i}`,
      passwordHash: bcrypt.hashSync(`password${i}`,10),
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }
  return users;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',generateUsers(),{});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
