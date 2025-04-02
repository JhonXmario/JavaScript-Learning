//const json = require('./03_curso.json')
//console.log(json.temas);

let infocurso = {
    titulo: "Aprendiendo",
    "subtitulo": "Node.js",
    "nombre": "Javascript",
    "temas": [
        "Bearder theme",
        "One Dark Pro"
    ],
    "funciona": true
};

// Transformando el objeto a una cadena de caracteres JSON (se usa stringify)
let infojson = JSON.stringify(infocurso)
console.log(infojson);

// Resivimos cadena de caracteres -> Convertirlo a Objeto (se usa parse)
let infoObjeto = JSON.parse(infojson)
console.log(infoObjeto.titulo);

