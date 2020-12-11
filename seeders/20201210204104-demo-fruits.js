'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Fruits', [{
      name: 'banana',
      fruit_type: 'tropical',
      fruit_color: 'amarela',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'abacate',
      fruit_type: 'subtropical',
      fruit_color: 'verde',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'maça',
      fruit_type: 'pseudofruto',
      fruit_color: 'vermelha',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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
