const { Router } = require("express");
const router = Router(); // es un metodo de express que se usa para crear un router, el router es una forma de organizar las rutas, es como un mini servidor, se puede usar para definir rutas y middlewares, y luego se puede usar en el servidor principal, esto es util para organizar el codigo y separar las rutas en diferentes archivos
const axios = require("axios"); // axios es una libreria para hacer peticiones http, se usa para hacer peticiones a otras api, o a la misma api, o a un servidor externo, es muy util para obtener datos de otras fuentes

router.all("/about", (req, res) => {
  const title = "Pai compai"
  res.render('index', { title })
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/posts", async (req, res) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  res.render("posts", { posts: response.data });
});

module.exports = router; // esto es para exportar el router, para que se pueda usar en el servidor principal, se puede usar en cualquier parte de la aplicacion, pero lo mejor es usarlo en el servidor principal, para que todas las rutas esten organizadas y separadas en diferentes archivos
