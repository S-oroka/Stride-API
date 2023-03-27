const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const AuthRouter = require('./AuthRouter')
const RunRouter = require('./RunRouter')

Router.use('/users', UserRouter)
Router.use('/auth', AuthRouter)
Router.use('/runs', RunRouter)


module.exports = Router