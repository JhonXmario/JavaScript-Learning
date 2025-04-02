// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
//fetch("https://jsonplaceholder.typicode.com/posts")
//.then(respone => {
//    return respone.json()
//})
//.then (data => {
//    console.log(data);
//})
//.catch(error => {
//    console.log(error);
//})
// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
//fetch("https://jsonplaceholder.typicode.com/poskdsdksts")
//.then(respone => {
//    if (respone.ok) {
//        return respone.json()
//    } else {
//        throw Error(`Status ${respone.status}`);
//    }
//})
//.then (data => {
//    console.log(data);
//})
//.catch(error => {
//    console.log(error);
//})
// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function get(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

//get("https://jsonplaceholder.typicode.com/posts")
// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
async function post(url) {
    try {
        const newpost = {
            userid: 1,
            tittle: "Mi post",
            body: "aqui su cuerpito"
        }
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newpost)
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    };
};

//post("https://jsonplaceholder.typicode.com/posts")
// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
async function put() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/12" , {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: "Nuevo titulo"})
        })
        const data = await response.json()
        console.log(data);

    } catch (e) {
        
    }
}

//put()
// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
async function patch() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/12" , {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: "Nuevo titulo", body: "Nuevo cuerpito"})
        })
        const data = await response.json()
        console.log(data);

    } catch (e) {
        
    }
}
//patch()
// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
async function dileit() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1" , {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        const data = await response.json()
        console.log(response.status);
        console.log(data);

    } catch (e) {
        
    }
}
//dileit()
// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
async function clima(city) {
    const apiKey = "ff34628acf14acd2c77a4f21c7ea1c95"
    const url = `https://api.openweathermap.org/data/2.5/weather?\q=${city}&appid=${apiKey}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}
//clima("Caracas")
// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
async function pokemon(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const url_specie = `https://pokeapi.co/api/v2/pokemon-species/${name}`
    const url_chain = `https://pokeapi.co/api/v2/evolution-chain/131/`
    try {
        // Obtener los datos del pokemon
        const pokedata = await fetch(url);
        const datapoke = await pokedata.json();
        console.log("Datos del pokemon: ", datapoke);
        // Obtener los datos de la especie de ese pokemonm
        const dataspecie = await fetch(url_specie);
        const speciedata = await dataspecie.json()
        console.log("Datos de la Especie: ", speciedata);
        // Obtener los datos de la cadena evolutiva
        const prevolu = await fetch(url_chain);
        const volupre = await prevolu.json();

        console.log("Cadena evolutiva: ");
        volupre.chain.evolves_to.forEach(x => {
            x.evolves_to.forEach(y => {
                console.log(y.species.name);
            })

        volupre.chain.evolves_to.forEach(x => {
            console.log(x.species.name)
        })
        console.log(volupre.chain.species.name)

        });
    } catch (e) {
        console.log(e);
    }
}
pokemon("blaziken")
// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API