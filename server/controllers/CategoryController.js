const Category = require('./../models/Category.js')

class CaterogyController {
    async getAll(req, res) {
        let { title } = req.query
        if (title) {
            const category = await Category.find({ title: title })
            return res.json(category)
        }
        else {
            const category = await Category.find({})
            return res.json(category)
        }

    }
    // async getOne(req, res) {
    //     let { title } = req.query
    //     const category = await Category.find({ title: title })
    //     return res.json(category)
    // }
}

module.exports = new CaterogyController()