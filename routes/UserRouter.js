const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.post('/', controller.createUser)
Router.get('/', controller.getUsers)

module.exports = Router