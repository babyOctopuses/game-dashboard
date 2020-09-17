'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'PlayerBios',
      [
        {
          player_id: 'harrypotter',
          first_name: 'Harry',
          last_name: 'Potter',
          city: 'London',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PlayerBios', null, {})
  },
}
