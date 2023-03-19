const Router = require('express');
const UserController = require('../controllers/UserController');
const router = new Router()


router.get('/user', UserController.sign)

module.exports = router;