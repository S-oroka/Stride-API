const { User, Location, Run } = require('../models')

const finUserById = async (req, res, next, id) => {
    try {
        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        req.user = user
        next()
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const user = await User.create({ username, email, password })
        res.status(201).json(user)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    finUserById,
    createUser
}