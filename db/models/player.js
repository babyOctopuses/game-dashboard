module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define(
    'Player',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV1,
      },
      username: { type: DataTypes.STRING, allowNull: false, unique: true },
      email: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Player',
      tableName: 'user_game',
    }
  )
  Player.associate = (models) => {
    Player.hasOne(models.PlayerBio, {
      foreignKey: 'uid',
      onDelete: 'CASCADE',
    })

    Player.hasMany(models.PlayerHistory, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    })
  }
  return Player
}
