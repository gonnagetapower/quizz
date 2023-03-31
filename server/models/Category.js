const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
    {
        title: String,
        img: {
            data: Buffer,
            contentType: String,
        }
    }
)


module.exports = mongoose.model('Category', CategorySchema)