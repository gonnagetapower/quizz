const Router = require('express')
const router = new Router()
const categoryRouter = require('./categoryRouter')
const quizRouter = require('./quizRouter')
const userRouter = require('./userRouter.js')

router.use('/', categoryRouter)
router.use('/', quizRouter)
router.use('/', userRouter)

module.exports = router