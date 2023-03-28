const {Run, Location} = require('../models')

const createLocationByRun = async (req, res) => {
    try {
        const run_id = req.params.id
        let postBody = {
            run_id,
            ...req.body
        }
        const location = await Location.create(postBody)
        res.status(201).json(location)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    createLocationByRun
}