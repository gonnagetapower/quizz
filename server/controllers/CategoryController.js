const Category = require('./../models/Category.js')

class CaterogyController {
    async getAll(req, res) {
        let { title } = req.query
        if (title) {
            const category = await Category.find({ title: title })
            return res.json(category)
        }
        else {
            const category = await Category.find({}).populate().where()
            return res.json(category)
        }
    }
    async create(req, res) {
        let { title } = req.body
        let img = req.files
        try {
            const doc = new Category({
                title: title,
                img: img
            })
            await doc.save()
            res.json({
                message: 'Категория создана'
            })
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: 'Не удалось создать категорию'
            })
        }
    }
}

module.exports = new CaterogyController()