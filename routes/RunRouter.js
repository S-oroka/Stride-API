const Router = require('express').Router()
const runController = require('../controllers/RunController')

Router.get('/', runController.getRuns)
Router.post('/:id', runController.createRun)
Router.delete('/:id', runController.deleteRun)


module.exports = Router