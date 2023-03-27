const Router = require('express').Router()
const controller = require('../controllers/UserController')


Router.get('/', controller.getUsers)
Router.get('/:id', controller.findUserById)

module.exports = Router