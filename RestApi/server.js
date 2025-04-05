const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

let products = [
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
    const productfound = products.find(p => p.id === parseInt(req.params.id)); //Busca en el array `products` un producto cuyo `id` coincida con el valor del parámetro `id` recibido en la URL. El `id` de la URL se convierte a número con `parseInt` para compararlo correctamente.

    if (!(productfound)) 
        return res.status(404).json({  //Si no se encuentra el producto, se envía un mensaje de error.
            message: "Producto no encontrado"
        });
  
    res.json(productfound); //Envía como respuesta el producto encontrado en formato JSON. Si no se encontró un producto, enviará `null`.
});

app.post('/products', (req, res) => {
    const newproduct = {...req.body, id: products.length + 1} // Crea un nuevo producto a partir de los datos recibidos en el cuerpo de la petición y le asigna un nuevo ID.
    products.push(newproduct) // Agrega el nuevo producto al array `products`.
    res.send(newproduct) // Envía como respuesta el nuevo producto creado.
})

app.put('/products/:id', (req, res) => {
    const newData = req.body
    
    const productfound = products.find(p => p.id === parseInt(req.params.id));
    if (!(productfound)) 
        return res.status(404).json({ 
            message: "Producto no encontrado"
        });
    products = products.map(p => p.id === parseInt(req.params.id) ? {...p, ...newData} : p)
    res.json({
        message: "Producto actualizado"
    })
})

app.delete('/products/:id', (req, res) => {
    const productfound = products.find(p => p.id === parseInt(req.params.id)); 

    if (!(productfound)) 
        return res.status(404).json({  
            message: "Producto no encontrado"
        });
    products = products.filter(p => p.id !== parseInt(req.params.id))
    res.sendStatus(204)
})

app.listen(port, () => console.log(`El servidor esta en ejecucion en el puerto: ${port}!`))