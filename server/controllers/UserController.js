const qs = require('querystring');
const crypto = require('crypto');
const verifyLaunchParams = require('../services/verify');


class UserController {
    async sign(res, req) {
        const token = req.body.token;
        console.log(token)
        if (token) {
            const launchParams = decodeURIComponent(token.slice(token.indexOf('?') + 1));
            console.log(launchParams)
            const decode = verifyLaunchParams(launchParams, "1GvOf5adl7rmkKW00VND")
            console.log(decode)
            return res.json(decode)
        }
    }
}

module.exports = new UserController()