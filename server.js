const express = require("express")
const mongoose =  require("mongoose")
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.use('/test', (req, res) => {
    console.log("Just got a request!")
    res.send('Server is running')
})

const postRoutes = require('./router')

app.use('/api', postRoutes)



mongoose.connect("mongodb+srv://xenoclub7:7WKlAN8XW5vfCTMx@biserver.z3sktii.mongodb.net/?retryWrites=true&w=majority&appName=BISERVER")
.then(() => {
    console.log("database is running")
})

app.listen(process.env.PORT || 3000)



