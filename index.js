const express = require("express")
const mongoose =  require("mongoose")
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())

const postRoutes = require('./router')

app.use('/api', postRoutes)



mongoose.connect("mongodb+srv://user:user@restapi.fptkcqu.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("database is running")
})

app.listen(port, () => {
    console.log(`server is up and running ${port}`)
})



