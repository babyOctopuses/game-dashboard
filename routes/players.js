const Router = require('express-promise-router')
const router = new Router()
const controller = require('../controllers/playersController')

router.get('/players', controller.getAllPlayers)
// TODO add player route
router.post('/players/create', controller.createPlayer)
router.delete('/players/delete/:id', controller.deletePlayer) //TODO fix cascade delete, edit migration
// TODO update player data
// TODO update player bio
// TODO update player log

module.exports = router
