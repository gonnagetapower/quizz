const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        vkid: {
            type: String,
            require: true,
            unique: true,
        },
        cash: {
            type: Number,
            default: 10,
        },
        bougthQuiz: [{
            type: String,
        }]
    }
)

module.exports = mongoose.model('User', UserSchema)