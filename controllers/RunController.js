const { Run, Location } = require('../models')


const createRun = async (req, res) => {
    try {
        const user_id = req.params.id
        let postBody = {
            user_id,
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

const findRunsByUser = async (req, res) => {
    try {
        const runs = await Run.findAll({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json(runs)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getRunById = async (req, res) => {
    try {
        const run = await Run.findByPk(req.params.id)
        res.status(200).json(run)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const editRun = async (req, res) => {
    try {
        const run = await Run.findByPk(req.params.id)
        run.update(req.body)
        res.status(200).json(run)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    createRun,
    deleteRun,
    getRuns,
    findRunsByUser,
    getRunById,
    editRun
}