
// 1. Escribe un comentario en una línea
// lito
// 2. Escribe un comentario en varias líneas
/* Lito
lito 
y lito */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let int = 1;
let string = "Hala";
let bool = true;
let symbol = Symbol("my symbol");
let nulo = null;
let bigint = BigInt(2390129310239123019)
// 4. Imprime por consola el valor de todas las variables
console.log(int)
console.log(string)
console.log(bool)
console.log(symbol)
console.log(nulo)
console.log(bigint)
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof int)
console.log(typeof string)
console.log(typeof bool)
console.log(typeof symbol)
console.log(typeof nulo)
console.log(typeof bigint)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
int = 3;
string = "Hola";
bool = false;
symbol = Symbol("Mi simbolo")
nulo = null
bigint = 23942349812039n
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
int = "3212";
string = 1.23;
bool = Symbol("otro njd");
symbol = null
nulo = 3
bigint = 3+2

console.log(int)
console.log(string)
console.log(bool)
console.log(symbol)
console.log(nulo)
console.log(bigint)

console.log(typeof int)
console.log(typeof string)
console.log(typeof bool)
console.log(typeof symbol)
console.log(typeof nulo)
console.log(typeof bigint)
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const int2 = 1;
const string2 = "Hala";
const bool2 = true;
const symbol2 = Symbol("my symbol");
const nulo2 = null;
const bigint2 = BigInt(2390129310239123019)
// 9. A continuación, modifica los valores de las constantes
//int2 = 3; esto produce error por que la variable int2 es una const y su valor no puede ser modificado
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse