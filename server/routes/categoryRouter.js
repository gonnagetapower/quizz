const Router = require('express')
const router = new Router()

const categoryController = require('../controllers/CategoryController')

router.get('/', categoryController.getAll)

module.exports = router;