'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', 
  [
    {
      fullName: 'Admin da Silva',
      email: 'admin@admin.com',
      password: 'Admin123456789',
    },
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
