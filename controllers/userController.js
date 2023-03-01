const { User } = require("../models");

const userController = {};

userController.getProfile = async (req, res) => {
    const userId = req.params.id;

    const user = await User.findByPk(userId)

    return res.json(user);
}





module.exports = userController;