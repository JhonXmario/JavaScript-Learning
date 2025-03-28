/* Esto es un comentario
de varias lineas */
console.log("hola mundo") // y esto de una linea
const hellowWorld = "Hello, JavaScript!";
let hellowWorld2 = "Hello, JavaScript!";

console.log(hellowWorld);
console.log(hellowWorld2);
/*esto dara error
hellowWorld = "Hola de nuevo!"

la diferencia entre const y let es que el valor asignado a const no puede ser modificado,
solo si el valor asignado contiene otro valor que si podria se modificado, en cambio let si lo permite*/

hellowWorld2 = "Hola otra vez!";
console.log(hellowWorld2);


// String (Cadena de texto)
let myname = "Jhon Mario";
let lastname = "Diaz Tubinez";

// Int (Numeros enteros)
let age = 19; // Entero
let height = 1.75; // Decimal

// Booleanos (Verdadero o Falso)
let x = true;
let y = false;

// Null
let nullValue = null;

// Symbol
let mySymbol = Symbol("mysymbol")

// BigInt
let mybigint = BigInt(1034245139045913092451023941059230)
let mybigint2 = 103424513904591423192451023941059230n

// Mostrar el tipo de dato
console.log(typeof myname)
console.log(typeof lastname)

console.log(typeof age)
console.log(typeof height)

console.log(typeof x)
console.log(typeof y)
console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof mybigint)
console.log(typeof mybigint2)