const Router = require('express')
const router = new Router()
const categoryRouter = require('./categoryRouter')
const quizRouter = require('./quizRouter')

router.use('/', categoryRouter)
router.use('/', quizRouter)

module.exports = router