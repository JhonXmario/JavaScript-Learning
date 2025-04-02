// Modulos integrados //

// process
//console.log(process.argv);

//for (let i = 2; i < process.argv.length; i++) {
    //console.log(process.argv[i]);
    
//}

// os (informacion del sistema operativo)
const os = require('os') // este hay que requerirlo

/* console.log(os.cpus());
console.log(os.platform());
console.log(os.release());
console.log(os.hostname()); */

// timers
// - setTimeout (algo que se ejecutara asincronicamente despues del tiempo especificado en milisegundos)
function tema(te) {
    console.log(`Buenos ${te}`);
} 
//setTimeout(tema, 5000, "dias");

function suma(a, b){
    console.log(a + b);
}
//setTimeout(suma, 5000, 5, 5);

// - setImmediate (algo que se ejecutara inmediatamente depues de que se acabe el codigo sincrono)
//setImmediate(tema, "diazz") 

// setIntervale (algo que se ejecutara infinitament en el intervalo de tiempo que se le especifique)
//setInterval(tema, 2000, "sopa");

// fs (file system)
const fs = require('fs');
// Leer un archivo
/*fs.readFile(__dirname + '/index.html', 'utf-8', (err, contenido) => {
    if (err) {
        console.error('Error leyendo el archivo:', err);
    } else {
        console.log(contenido);
    }
}) */

// Renombrar un archivo
/* fs.rename('mamin.html', 'main.html', (err) => {
    if (err) {
        throw err;
    }
    console.log("Nombre cambiado exitosamente");
}) */

// Agregar contenido al final de un archivo.
/* fs.appendFile('main.html', '<p>Hola</p>', (err) => {
    if (err) {
        throw err;
    }
    console.log('Archivo modificado');
}); */

// Reemplazar todo el contenido de un archivo
/* fs.writeFile('index.html', 'Nuevo Contenido', (err) => {
    if (err) {
        throw err;
    }
    console.log("Se ha reemplazado el contenido del archivo");
}); */


// eliminar arhivos
/* fs.unlink('index.html', (err) => {
    if (err) {
        throw err;
    }
    console.log("Eliminado");
}) */

// Si no se quiere que las operaciones se ejecuten de manera independitente para que cada una lleve su propio tiempo segun lo requiera entonces se debe de usar Sync, de esta manera las demas operaciones solo se ejecutaran cuando la anterior finalize
