const db = require('../db/models')

const getAllPlayers = async (req, res) => {
  const players = await db.Player.findAll({
    include: [db.PlayerBio, db.PlayerHistory],
  })
  res.render('players', { players })
}

const getAllPlayersBio = async (req, res) => {
  const players = await db.PlayerBio.findAll()
  res.status(200).json(players)
}

const getAllPlayersLogs = async (req, res) => {
  const players = await db.PlayerHistory.findAll()
  res.status(200).json(players)
}

module.exports = {
  getAllPlayers,
  getAllPlayersBio,
  getAllPlayersLogs,
}
