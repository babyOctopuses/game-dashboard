const Router = require('express-promise-router')
const router = new Router()
const controller = require('../controllers/playersController')

router.get('/', controller.getAllPlayers)

router.get('/log', controller.getAllPlayersLogs)

router.get('/bio', controller.getAllPlayersBio)

module.exports = router
