const Quiz = require('./../models/Quiz.js')

class QuizController {
    async getByCategory(req, res) {
        let { category } = req.query
        const quizes = await Quiz.find({ category: category })
        return res.json(quizes)
    }
}

module.exports = new QuizController()