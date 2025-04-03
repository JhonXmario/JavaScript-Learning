import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Bienvenido</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>Bienvenido a acerca de</h1>')
})

app.listen(3000)
console.log("Server is running in port 3000");