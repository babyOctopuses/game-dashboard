const Router = require('express-promise-router')
const router = new Router()
const db = require('../db/models')

router.get('/', async (req, res) => {
  const players = await db.Player.findAll({
    include: [db.PlayerBio, db.PlayerHistory],
  })
  res.render('players', { players })
})

router.get('/log', async (req, res) => {
  const players = await db.PlayerHistory.findAll()
  res.status(200).json(players)
})

router.get('/bio', async (req, res) => {
  const players = await db.PlayerBio.findAll()
  res.status(200).json(players)
})

module.exports = router
