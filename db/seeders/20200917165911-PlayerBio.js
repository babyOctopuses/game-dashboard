'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'user_game_biodata',
      [
        {
          uid: '06896bd4-8cbc-48c6-8c46-9364a6d939c4',
          first_name: 'Harry',
          last_name: 'Potter',
          city: 'London',
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_game_biodata', null, {})
  },
}
