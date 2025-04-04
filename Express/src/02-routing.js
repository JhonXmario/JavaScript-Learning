const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hola</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>Acerca de</h1>')
})

app.get('/weather', (req, res) => {
    res.send('<h1>Clima jodido</h1>')
})
app.use((req, res) => {
    res.status(404).send('<h1>Not found error 404</h1>') // status sirve para definir el estado de la respuesta
})


app.listen(3000)
console.log(`Server on port ${3000}`);