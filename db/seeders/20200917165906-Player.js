'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'user_game',
      [
        {
          id: '06896bd4-8cbc-48c6-8c46-9364a6d939c4',
          username: 'harrypotter',
          email: 'potter@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_game', null, {})
  },
}
