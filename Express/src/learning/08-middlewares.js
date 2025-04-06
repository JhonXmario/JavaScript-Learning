const express = require("express");
const path = require("path"); // es un modulo de node que se usa para trabajar con rutas, en este caso lo estamos usando para definir la ruta de los archivos estaticos, pero se puede usar para cualquier ruta, por ejemplo, para definir la ruta de un archivo o una carpeta, o para unir rutas, etc.
const morgan = require("morgan"); // es un middleware para logear las peticiones, es un paquete de npm, se usa para ver las peticiones que llegan al servidor, es muy util para depurar errores y ver que esta pasando en el servidor, se puede usar en produccion o en desarrollo, pero en produccion no es recomendable porque puede mostrar datos sensibles

const app = express();
const port = 3000;

const homerouter = require(path.join(__dirname, "../routes/home.js"));
const userrouter = require(path.join(__dirname, "../routes/users.js"));

// Settings
app.set("appName", "Express learning"); // set sirve para definir una variable global, en este caso estamos definiendo el nombre de la aplicacion, se puede usar para definir variables globales que se pueden usar en cualquier parte de la aplicacion, por ejemplo, el nombre de la aplicacion, la version, etc. se puede acceder a estas variables con app.get('nombreVariable')

// Middlewares
app.use(express.json()); // esto es para parsear el body de la peticion, es decir, para convertir el body de la peticion en un objeto json, esto es necesario para poder trabajar con el body de la peticion, ya que por defecto express no lo parsea, solo lo hace si se usa este middleware
app.use(morgan("dev"));

app.use(homerouter);
app.use(userrouter);

// routes
app.use("/static", express.static(path.join(__dirname, "../static"))); // esto es para servir archivos estaticos, como css, js, imagenes, etc. el primer parametro es la ruta y el segundo es la carpeta donde estan los archivos estaticos, en este caso estamos usando path.join para unir la ruta actual con la carpeta static, esto es para que funcione en cualquier sistema operativo, ya que cada sistema operativo tiene una forma diferente de definir rutas
app.listen(port, () =>
  console.log(`Server ${app.get("appName")} on port ${port}!`)
);

// Middlewares
/* app.use(morgan('dev'))
app.use((req, res, next) => {
    if (req.query.login === 'mario@marioweb.com') { // este middelware es para autenticar al usuario, si el usuario no esta autenticado no se ejecuta la siguiente ruta, en este caso estamos usando un query param para autenticar al usuario, pero esto no es seguro, lo mejor es usar un token o una cookie
        next() 
        
    } else {
        res.send("You are not logged in")
    }
})  */

// un middleware es una funcion que se ejecuta antes de la ruta y puede modificar la peticion o la respuesta, esto es para hacer algo antes de que la ruta se ejecute, y con eso podemos hacer cosas como autenticar, validar, etc.
// "use" es un metodo de express que se usa para definir un middleware, el primer parametro es la ruta y el segundo es la funcion que se ejecuta, use tambien sirve para definir middlewares globales, es decir, que se ejecutan para todas las rutas
// "req" es la peticion y "res" es la respuesta, el middleware puede modificar la peticion o la respuesta, pero no es necesario, en este caso solo estamos imprimiendo la ruta en la consola;
// "next" es una funcion que se llama para pasar al siguiente middleware o ruta, si no se llama next, la peticion se queda en espera y no se ejecuta la siguiente ruta
