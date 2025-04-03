const path = require('path');

const filepath = path.join('/public', 'dist', 'styles', 'main.css');
// Une los segmentos de ruta proporcionados ('/public', 'dist', 'styles', 'main.css') en una sola ruta normalizada.
// Esto asegura que los separadores de directorios sean correctos según el sistema operativo.

console.log(filepath);
// Imprime la ruta completa generada por `path.join`.

console.log(path.basename(filepath));
// Obtiene el nombre del archivo (incluyendo su extensión) de la ruta especificada.
// En este caso, devolverá 'main.css'.

console.log(path.dirname(filepath));
// Obtiene la ruta del directorio que contiene el archivo especificado.
// En este caso, devolverá '/public/dist/styles'.

console.log(path.parse(filepath));
// Devuelve un objeto que descompone la ruta en partes: root, dir, base, name y ext.
// Por ejemplo, para 'main.css', devolverá algo como:
// { root: '/', dir: '/public/dist/styles', base: 'main.css', name: 'main', ext: '.css' }

console.log(path.resolve('dist'));
// Resuelve una ruta absoluta a partir de la ruta proporcionada ('dist').
// Si no se proporciona un directorio base, usa el directorio actual como punto de partida.