//async function url() { //* Actualmente, si se declara el tipo modulo en el package.json no hace falta declarar una funcion para realizar acciones como esta
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
//}

//url()
