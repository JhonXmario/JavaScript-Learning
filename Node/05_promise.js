const procu = false
const my_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (procu) {
            resolve("Promesa cumplida");
        } else {
            reject("Promesa rechazada");
        }
    }, 5000);
});
const manejarcumplida = (valor) => {
    console.log(valor);
}

const manejarechazo = (razon) => {
    console.log(razon);
}

my_promise.then(manejarcumplida, manejarechazo);