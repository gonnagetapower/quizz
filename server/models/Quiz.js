const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema(
    {
        // category: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Category',
        //     required: true,
        // },
        game: [{
            title: {
                type: String,
                required: true,
            },
            descr: {
                type: String,
            },
            available: {
                type: Boolean,
                required: true,
            },
            price: {
                type: Number,
                required: true,
                default: 0,
            },
            test: [{
                title: {
                    type: String,
                },
                variants: [{
                    type: String,
                }],
                correct: {
                    type: Number,
                }
            }]
        }]

    }
)

module.exports = mongoose.model('Quiz', QuizSchema)