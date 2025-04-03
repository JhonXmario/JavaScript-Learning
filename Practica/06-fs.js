const fs = require('fs');
// readfilesync sirve para leer archivos en la ruta especificada, y el segundo parametro es la codificacion, en este caso utf-8, que es la codificacion de caracteres mas comun
/* const first = fs.readFileSync('./Practica/data/first.txt', 'utf-8'); // readFileSync es una funcion sincrona, lo que significa que el programa se detiene hasta que el archivo se a leido, por lo que no se recomienda su uso en archivos grandes o en operaciones asincronas
const second = fs.readFileSync('./Practica/data/second.txt');

console.log(first);
console.log(second.toString());


const title = 'Este contenido se a agregado\n'
fs.writeFileSync('./Practica/data/fourth.txt', title, { // writefilesync sirve para escribir en un archivo, y el tercer parametro es un objeto que contiene opciones, en este caso la opcion flag, que indica que se va a agregar contenido al archivo ('a' de added), en lugar de sobrescribirlo
    flag: 'a'
});
 */

// la funcion readfile recibe sus parametros como la ruta del archivo, la codificacion y una funcion de callback
// El callback es una funcion que se ejecuta cuando el archivo se a leido, y recibe dos parametros, el primero es un error y el segundo es el contenido del archivo
// El callback significa una funcion que se ejecuta cuando la operacion asincrona se a completado, en este caso cuando el archivo se a leido
fs.readFile('./Practica/data/first.txt', 'utf-8', (e, data) => {
    if (e) {
        console.log(e);
    }
    console.log(data);
    fs.readFile('./Practica/data/second.txt', 'utf-8', (e, data) => {
        if (e) {
            console.log(e);
        }
        console.log(data);
        fs.readFile('./Practica/data/third.txt', 'utf-8', (e, data) => {
            if (e) {
                console.log(e);
            }
            console.log(data);
            fs.readFile('./Practica/data/fourth.txt', 'utf-8', (e, data) => {
                if (e) {
                    console.log(e);
                }
                console.log(data);
                //! Hacer esto es lo menos recomendable, ya que es dificil de leer y mantener, ya que si se quiere agregar otro archivo, se tendria que agregar otro callback dentro del callback anterior, lo que se conoce como callback hell o piramide de la muerte 0_0
            })
        })
    }) 
})