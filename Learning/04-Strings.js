// Strings

// Concatenacion
let myname = "Jhon";
let greeting = "Hola, " + myname + '!';
console.log(greeting);

// Longitud
console.log(greeting.length);
console.log(greeting[3]);
console.log(greeting[13]);

// Metodos comunes
console.log(greeting.toUpperCase()); // Convierte el String en Mayuscula
console.log(greeting.toLocaleLowerCase()); // Convierte el String en minuscula

console.log(greeting.indexOf("Hola"));
console.log(greeting.indexOf("Jhon")); // Esto te muesta el indice de en donde empieza la palabra encontrada
console.log(greeting.indexOf("XYZ"));

console.log(greeting.includes("Jhon"));
console.log(greeting.includes("Hola")); // Esto te dice si el String contiene la palabra especificada
console.log(greeting.includes("XYZ"));

console.log(greeting.slice(0, 7)) // Te imprime los caracteres del String desde hasta donde especifiques
console.log(greeting.replace('Jhon', "Mario")) // Reemplaza un valor por el valor especificado luego de la coma

// Template Literals (plantillas literales)
let message = `Hola 
buenos
 dias
Ahora 
si 
sirve 
jejejeje`

console.log(message)
let alias = "MarioXYZ"
console.log(`Hola, ${myname}! Tu usuario es ${alias}`); // Esto es una forma de llamar a una variable dentro de un String, usando los ``, el nombre de la variable entre llaves y '$' al lado
