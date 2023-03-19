const Router = require('express')
const router = new Router()
const categoryRouter = require('./categoryRouter')
const quizRouter = require('./quizRouter')
const userRouter = require('./userRouter.js')
const authMiddleware = require('./../middleware/authMiddleware.js')

router.use('/', categoryRouter)
router.use('/', quizRouter)
router.use('/', authMiddleware, userRouter)

module.exports = router