const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const AuthRouter = require('./AuthRouter')
const RunRouter = require('./RunRouter')
const LocationRouter = require('./LocationRouter')

Router.use('/users', UserRouter)
Router.use('/auth', AuthRouter)
Router.use('/runs', RunRouter)
Router.use('/locations', LocationRouter)


module.exports = Router