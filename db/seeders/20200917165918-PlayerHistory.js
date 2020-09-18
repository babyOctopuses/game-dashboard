'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'user_game_history',
      [
        {
          user_id: '06896bd4-8cbc-48c6-8c46-9364a6d939c4',
          level: 1,
          experience: 0,
          last_login: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_game_history', null, {})
  },
}
