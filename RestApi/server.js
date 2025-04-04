const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

const products = [
    { id: 1, name: 'Laptop HP' },
    { id: 2, name: 'Samsumg Galaxy' },
    { id: 3, name: 'Geforce RTX 5500' }
]

app.use(morgan('dev')) // Middleware para registrar las peticiones HTTP
app.use(express.json()) // Middleware para parsear el cuerpo de las peticiones JSON
app.use(express.urlencoded({ extended: true })) // Middleware para parsear el cuerpo de las peticiones URL-encoded


app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    
    console.log(req.params.id); // 1. Imprime en la consola el valor del parámetro `id` recibido en la URL.
    console.log("Obteniendo producto por id"); // 2. Imprime un mensaje indicando que se está obteniendo un producto por su ID.
    
    const productfound = products.find(p => p.id === parseInt(req.params.id)); // 3. Busca en el array `products` un producto cuyo `id` coincida con el valor del parámetro `id` recibido en la URL. El `id` de la URL se convierte a número con `parseInt` para compararlo correctamente.

    if (!(productfound)) return res.status(404).json({  // 4. Si no se encuentra el producto, se envía un mensaje de error.
        message: "Producto no encontrado"
    })
  
    console.log(productfound); // 4. Imprime en la consola el producto encontrado (o `undefined` si no se encontró ninguno).
    res.json(productfound); // 5. Envía como respuesta el producto encontrado en formato JSON. Si no se encontró un producto, enviará `null`.
});

app.post('/products', (req, res) => {
    const newproduct = {...req.body, id: products.length + 1} // Crea un nuevo producto a partir de los datos recibidos en el cuerpo de la petición y le asigna un nuevo ID.
    products.push(newproduct) // Agrega el nuevo producto al array `products`.
    res.send(newproduct) // Envía como respuesta el nuevo producto creado.
})

app.put('/products', (req, res) => {
    res.send('Actualizando productos')
})

app.delete('/products', (req, res) => {
    res.send('Borrando producto')
})

app.listen(port, () => console.log(`El servidor esta en ejecucion en el puerto: ${port}!`))