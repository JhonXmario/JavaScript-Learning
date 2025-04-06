const express = require('express')
const app = express()
const port = 3000

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res) => {
    res.send('Nuevo usuario creado')
    console.log(req.body);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))