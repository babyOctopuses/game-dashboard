'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class PlayerLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PlayerLog.init(
    {
      username: { type: DataTypes.STRING, allowNull: false },
      level: { type: DataTypes.INTEGER, defaultValue: 1 },
      experience: { type: DataTypes.INTEGER, defaultValue: 0 },
      last_login: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'PlayerLog',
      tableName: 'PlayerLogs',
    }
  )
  return PlayerLog
}
