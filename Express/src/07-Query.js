const express = require('express')
const app = express()
const port = 3000

app.get('/search', (req, res) => {
    console.log(req.query); // las queries son un objeto que contiene los parametros de la url, la url es la que se encuentra despues del ?, esto tiene el funcionamiento de un objeto, por lo que se puede acceder a sus propiedades como si fuera un objeto normal, ademas de que se pueden enviar varios parametros, por ejemplo: ?q=java&sort=asc, y se pueden acceder a ellos como req.query.q y req.query.sort
    if (req.query.q === 'java') {
        res.send("Lista de comandos de java")
    } else {
        res.send('pagina normal')
    }
})

app.get('/hello/:user', (req, res) => { // los parametros de la url son aquellos que se encuentran entre : y el nombre del parametro, por ejemplo: /hello/:user, en este caso el parametro es user, y se puede acceder a el como req.params.user
    res.send(`hello ${req.params.user}`)
})

app.get('/add/:x/:y', (req, res) => {
    const {x, y} = req.params
    res.send(`Resultado: ${parseInt(x) + parseInt(y)}`)
})

app.get('/user/:username/photo', (req, res) => {
    if (req.params.username === 'jhon') {
        return res.sendFile('./obsidian.jpg', {
            root: __dirname
        })
    }
    res.send('El usuario no tiene acceso')
})

app.get('/name/:nombre/age/:age', (req, res) => {
    res.send(`El ususario ${req.params.nombre} tiene ${req.params.age} anios`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))