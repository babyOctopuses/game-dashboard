'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Players',
      [
        {
          player: 'harrypotter',
          email: 'potter@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Players', null, {})
  },
}
