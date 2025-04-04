const express = require('express')
const morgan = require('morgan') // es un middleware para logear las peticiones, es un paquete de npm, se usa para ver las peticiones que llegan al servidor, es muy util para depurar errores y ver que esta pasando en el servidor, se puede usar en produccion o en desarrollo, pero en produccion no es recomendable porque puede mostrar datos sensibles
const app = express()
const port = 3000

app.use(morgan('dev'))

app.use((req, res, next) => {
    if (req.query.login === 'mario@marioweb.com') { // este middelware es para autenticar al usuario, si el usuario no esta autenticado no se ejecuta la siguiente ruta, en este caso estamos usando un query param para autenticar al usuario, pero esto no es seguro, lo mejor es usar un token o una cookie
        next() 
        
    } else {
        res.send("You are not logged in")
    }
})

app.get('/dashboard', (req, res) => {
    res.send('Dashboard page')
})

app.get('/profile', (req, res) => {
    res.send('This is the profile page')
})

app.all('/about', (req, res) => {
    res.send('This is the about page')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 

// un middleware es una funcion que se ejecuta antes de la ruta y puede modificar la peticion o la respuesta, esto es para hacer algo antes de que la ruta se ejecute, y con eso podemos hacer cosas como autenticar, validar, etc.
// use es un metodo de express que se usa para definir un middleware, el primer parametro es la ruta y el segundo es la funcion que se ejecuta, use tambien sirve para definir middlewares globales, es decir, que se ejecutan para todas las rutas
// req es la peticion y res es la respuesta, el middleware puede modificar la peticion o la respuesta, pero no es necesario, en este caso solo estamos imprimiendo la ruta en la consola;
// next es una funcion que se llama para pasar al siguiente middleware o ruta, si no se llama next, la peticion se queda en espera y no se ejecuta la siguiente ruta