const {Run, Location} = require('../models')

const createLocationByRun = async (req, res) => {
    try {
        const run_id = req.params.run_id
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

const deleteLocationByRun = async (req, res) => {
    try {
        const location_id = req.params.location_id
        await Location.destroy({
            where: {
                id: location_id
            }
        })
        res.send({ message: `Location ${location_id} deleted` })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    createLocationByRun,
    deleteLocationByRun
}