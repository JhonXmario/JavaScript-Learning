const {writeFile} = require('fs/promises');

/* const createBigFile = async () =>{
    await writeFile('./Practica/data/bigfile.txt', 'Hello World'.repeat(100000));
};

createBigFile() */

const {createReadStream} = require('fs')

const stream = createReadStream('./Practica/data/bigfile.txt', {
    encoding: 'utf-8', // encoding es la codificación de los datos, utf-8 es la codificación por defecto, si no se especifica, se usará utf-8, si se especifica otra codificación, se usará esa codificación
    highWaterMark: 1000 // highWaterMark es el tamaño del buffer, el tamaño del buffer es el tamaño de los datos que se leerán en cada lectura, si no se especifica, se usará 64kb, si se especifica otro tamaño, se usará ese tamaño
})

stream.on('data', (chunk) => { // data es un evento que se dispara cuando hay datos disponibles para leer, data ya existe en el stream, es un evento que se dispara cuando hay datos disponibles para leer, chunk es el trozo de datos que se ha leído
    console.log(chunk.toString())
;
})

stream.on('end', () => { // end es un evento que se dispara cuando se ha leído todo el archivo, si colocamos algo que no sea end, no se ejecutará nunca, end ya existe en el stream, es un evento que se dispara cuando se ha leído todo el archivo
    console.log("Ya nojoda");
})

stream.on('error', (error) => { // error es un evento que se dispara cuando hay un error al leer el archivo, si colocamos algo que no sea error, no se ejecutará nunca, error ya existe en el stream
    console.log(error);
})

stream.on('')