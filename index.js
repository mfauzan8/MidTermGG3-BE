require('dotenv').config();
const express = require('express')
var cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js')

const app = express()
app.use(cors())

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL)
    .then(() => console.log('DB connection successful'))
    .catch((err) => console.log(err))
// const db = mongoose.connect


// db.on('error', (err) => {
//     console.log(err)
// })

// db.once('connected', () => {
//     console.log('Connected to MongoDB')
// })

app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use('/api/v1', routes)


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})