const { v4: uuidv4 } = require('uuid')
const db = require('../db/models')

const getAllPlayers = async (req, res) => {
  const players = await db.Player.findAll({
    include: [db.PlayerBio, db.PlayerHistory],
  })
  res.json({ players })
}

const createPlayer = async (req, res) => {
  const player = req.body
  const uuid = uuidv4()
  await db.Player.create(
    {
      id: uuid,
      username: player.username,
      email: player.email,
      PlayerBio: {
        uid: uuid,
      },
      PlayerHistories: [
        {
          uid: uuid,
        },
      ],
    },
    {
      include: [db.PlayerBio, db.PlayerHistory],
    }
  )

  res.json({ status: 'Created' })
}

const deletePlayer = async (req, res) => {
  await db.Player.destroy({
    where: {
      id: req.params.id,
    },
  })

  res.json({ status: 'Deleted' })
}

module.exports = {
  getAllPlayers,
  createPlayer,
  deletePlayer,
}
