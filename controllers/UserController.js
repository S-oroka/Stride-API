const { User, Location, Run } = require('../models')

const findUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



const getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getUsers,
    findUserById
}