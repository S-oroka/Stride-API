const Router = require('express').Router()
const runController = require('../controllers/RunController')

Router.get('/', runController.getRuns)
Router.post('/:id', runController.createRun)
Router.delete('/:id', runController.deleteRun)
Router.get('/:id', runController.findRunsByUser)
Router.get('/run/:id', runController.getRunById)
Router.put('/:id', runController.editRun)


module.exports = Router