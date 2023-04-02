const verify = require('./../services/verify.js')

module.exports = function (req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        const launchParams = decodeURIComponent(authHeader.slice(authHeader.indexOf('?') + 1));
        const userData = verify(launchParams, '1GvOf5adl7rmkKW00VND')
        req.user = userData;
        next()
    } catch (e) {
         res.json({message: 'Пользователь не авторизован'})
    }
}