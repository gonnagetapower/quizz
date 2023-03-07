const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())

const start = async () => {
    try {
        app.listen(3000, () => console.log(`Server has been started on PORT ${3000} `))
    } catch (error) {
        console.log(error)
    }
}

start()