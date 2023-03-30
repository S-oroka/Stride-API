const Router = require('express').Router()
const runController = require('../controllers/RunController')

Router.get('/', runController.getRuns)
Router.post('/:id', runController.createRun)
Router.delete('/:id', runController.deleteRun)
Router.get('/:id', runController.findRunsByUser)
Router.get('/:id', runController.getRunById)


module.exports = Router