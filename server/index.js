const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const router = require('./routes/index')
const cors = require('cors')


const url = 'mongodb+srv://gonnagetapower:naruto123@cluster0.aiivlyq.mongodb.net/quiz_vk?retryWrites=true&w=majority'
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        await mongoose.connect(url, {})
        .then((result) => console.log('Mongo connected'))
        .catch((err) => console.log('err :', err))
            app.listen(3000, () => console.log(`Server has been started on PORT ${3000} `))
    } catch (error) {
        console.log(error)
    }
}

start()