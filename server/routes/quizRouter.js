const Router = require('express')
const router = new Router()

const quizController = require('../controllers/QuizController')

router.get('/quiz', quizController.getByCategory)

module.exports = router;