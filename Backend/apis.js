// Manejo de APIs

// - APIs REST (HTTP + URLs + JSON)

// HTTP

// Metodos HTTP:
// - GET (obtener datos)
// - POST (enviar datos)
// - PUT (actualizar datos)
// - DELETE (eliminar xd)

// Codigos de respuesta HTTP:
// - 200 OK (operacion exitosa)
// - 201 (OK, todo bien y te muestro que hiciste)
// - 400 (hubo un error, algo hiciste mal tu en la peticion)
// - 404 (hubo un error, lo que estas intentanto realizar no es posible por X o Y, como que los datos no existen)
// - 500 (Hubo error por el lado del servidor, no tuyo)

// Consumir una API (un get lo mas simple)
//fetch("https://jsonplaceholder.typicode.com/posts")
//    .then(response => { // Transforma la respuesta en JSON
//        return response.json(); // Si queremos trabajar con los datos, tenemos que retornarlos a nosotros, un console.log() solo los imprimira y chao pescao
//    })
//    .then(data => { // Procesa los datos (los imprime xd)
//        console.log(data);
//    })
//    .catch(error => { // Captura los errores
//        console.log("error", error);
//    })

// Uso de Async/Await
async function getPosts(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data);
    } catch (e) {
        console.log("Error", e);
    }
}

//getPosts()

// Solicitud post
async function createPosts(){
    try {
        const newpost = {
            userid: 1,
            tittle: "Mi post 7w7",
            body: "aqui su cuerpito"
        }
        
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newpost)
        })
        const data = await response.json()
        console.log(data);
    } catch (e) {
        console.log("Error", e);
    }
}
//createPosts()

// Manejo de errores
//fetch("https://jsonplaceholder.typicode.com/safsdffasdf")
//    .then(response => { 
//        if (!response.ok) {
//            throw Error(`Status HTTP: ${response.status}`)         
//        }
//        return response.json()
//    })
//
//    .then(data => {
//        console.log(data);
//    })
//
//    .catch(error => {
//        console.log("error", error.message);
//    })

// Metodos HTTP adicionales
// - PATCH (actualizar parcialmente un recurso)
// - OPTIONS (Permite ver que metodos http estan disponibles para un recurso)


// PATCH (actualizar solo partes del recurso)
async function partialUpdatePosts(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: "Nuevo titulo"})
        })
        const data = await response.json()
        console.log(data);
    } catch (e) {
        console.log("Error", e);
    }
}

//partialUpdatePosts()

// Autenticacion mediante API Key (tu clave para comunicarte con el server)
async function getWeather(city) {
    const apiKey = "ff34628acf14acd2c77a4f21c7ea1c95"
    const url = `https://api.openweathermap.org/data/2.5/weather?\q=${city}&appid=${apiKey}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);

    } catch (e) {
        console.log("Error", e);
    }
}

//getWeather("Caracas")

// Otros metodos de Autenticacion y Autorizacion
// - Bearer Tokens
// - JSON Web tokens (JWT)

// Versionado de APIs
// - https://api/example.com/v1/resources   (Ejemplo)
// - https://api/example.com/v2/resources


// POKEAPI (la api para ver cualquier informacion del mundo pokemon!!!!!!)
async function getPoke(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(`Nombre: ${data.name}`);
        data.moves.forEach(ability => {
            console.log(ability.move.name);
        });

    } catch (e) {
        console.log("Error", e);
    }
}

getPoke("pikachu")