const express = require('express')
const app = express()
const port = 3000

app.get('/hello/:user', (req, res) => {
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