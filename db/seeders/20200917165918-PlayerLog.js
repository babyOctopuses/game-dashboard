'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'PlayerLogs',
      [
        {
          username: 'harrypotter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PlayerLogs', null, {})
  },
}
