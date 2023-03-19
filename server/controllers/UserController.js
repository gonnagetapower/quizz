const User = require('./../models/User.js')

class UserController {
    // async test(res, req) {
    //     const users = await User.find()
    //     console.log(users)
    //     return res.json()
    // }
    async getUsers(req, res) {
        const headers = req.headers
        const users = {}
        return res.json(headers)
    }
}

module.exports = new UserController()