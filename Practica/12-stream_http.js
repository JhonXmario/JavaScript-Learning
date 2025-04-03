const http = require('http');
const {createReadStream} = require('fs');

const server = http.createServer((req, res) => {
    const stream = createReadStream('./Practica/data/bigfile.txt', 'utf-8');

    stream.on('data', (chunk) => {
        stream.pipe(res) // pipe es un método que permite enviar datos de un stream a otro, o sea, de un archivo a la respuesta HTTP.
    stream.on('error', err => {
        console.log(err);
    })
    })
})

server.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})