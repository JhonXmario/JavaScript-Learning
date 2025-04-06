const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, world')
})

app.get('/miarchivo', (req, res) => {
    res.sendFile('./obsidian.jpg', {
        root: __dirname
    })
})

app.get('/user', (req, res) => {
    res.json({
        "id": "1",
        "name": "Jhon",
        "age": "20"
    })
})

app.get('/isalive', (req, res) => {
    res.sendStatus(204)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))