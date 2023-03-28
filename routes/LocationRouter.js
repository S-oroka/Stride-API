const Router = require('express').Router()
const LocationController = require('../controllers/LocationController')

Router.post('/:run_id', LocationController.createLocationByRun)
// Router.get('/:run_id/:id', LocationController.getLocations)

module.exports = Router