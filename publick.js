const express = require("express")
const app = express()
const port = 8080

app.set('view engine', 'ejs')

const dataStore = [{
    "name": "test99",
    "email": "test99@gmail.com"
  }]

app.use(express.json())

app.get('/dummy', async (req, res) => {
    await res.render('index', {data:dataStore})
     console.log({data:dataStore})
})

/// add data in array
app.post('/data', (req, res) => {
    const {name, email} = req.body;
    dataStore.push({name, email});
    res.render('index', {data:{name, email}})
    res.json({message: "data in array", data:{name, email}})
})

app.get('/display', (req, res) => {
    res.render({data:dataStore.name})
})


app.listen(port, () => {
    console.log(`server is up and running ${port}`)
})