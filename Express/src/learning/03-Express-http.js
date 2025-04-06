const express = require('express')

const app = express()

app.get('/products', (req, res) => { // Las Urls Funcionan con la peticion get, pues es para obtener lo que hay en esa direccion
    res.send('Lista de Productos')
    // validate data
    // query database
    // process data
})

app.post('/products', (req, res) => { // post es una peticion para crear un nuevo recurso, en este caso un producto
    res.send('Creando productos')
})

app.put('/products', (req, res) => { // put es una peticion para actualizar un recurso completo, en este caso un producto
    res.send('Actualizando productos')
})

app.delete('/products', (req, res) => { // delete es una peticion para eliminar un recurso, en este caso un producto
    res.send('Borrando productos')
})

app.patch('/products', (req, res) => { // patch es una peticion para actualizar una parte de un recurso, en este caso un producto
    res.send('Actualizando una partes producto')
})

app.all('/info', (req, res) => { // el metodo all permite que se ejecute la misma funcion para todos los metodos http, por ejemplo: get, post, put, delete, etc.
    res.send('server info')
})

app.listen(3000)
console.log(`Server on port ${3000}`);