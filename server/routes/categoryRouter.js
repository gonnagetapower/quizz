const Router = require('express')
const router = new Router()

const categoryController = require('../controllers/CategoryController')

router.get('/category', categoryController.getAll)
router.post('/category', categoryController.create)

module.exports = router;