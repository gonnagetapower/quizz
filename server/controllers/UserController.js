const qs = require('querystring');
const crypto = require('crypto');
const verifyLaunchParams = require('../services/verify');
const User = require('./../models/User.js')


class UserController {
    // async sign(res, req) {
    //     const token = req.body.token;
    //     console.log(token)
    //     if (token) {
    //         const launchParams = decodeURIComponent(token.slice(token.indexOf('?') + 1));
    //         console.log(launchParams)
    //         const decode = verifyLaunchParams(launchParams, "1GvOf5adl7rmkKW00VND")
    //         console.log(decode)
    //         return res.json(decode)
    //     }
    // }
    async test(res, req) {
        const user = await User.find()
        return res.json(user)
    }
}

module.exports = new UserController()