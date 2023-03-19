const User = require('./../models/User.js')

class UserController {
    // async test(res, req) {
    //     const users = await User.find()
    //     console.log(users)
    //     return res.json()
    // }
    async getUsers(req, res) {
        const users = {}
        return res.json(users)
    }
}

module.exports = new UserController()