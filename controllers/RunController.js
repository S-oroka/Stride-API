const { Run, Location } = require('../models')


const createRun = async (req, res) => {
    try {
        const userId = req.params.id
        let postBody = {
            userId,
            ...req.body
        }
        const run = await Run.create(postBody)
        res.status(201).json(run)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteRun = async (req, res) => {
    try {
        const runId = parseInt(req.params.id)
        await Run.destroy({
            where: {
                id: runId
            }
        })
        res.send({ message: `Run ${runId} deleted` })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getRuns = async (req, res) => {
    try {
        const runs = await Run.findAll()
        res.status(200).json(runs)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    createRun,
    deleteRun,
    getRuns
}