const mongoose = require('mongoose')

const db_url = process.env.MONGODB_URL;

mongoose
    .connect(db_url, {useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
