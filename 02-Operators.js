// Operadores

// Operadores Aritmeticos
let x = 2
let y = 7
console.log(x + y) // Suma
console.log(x - y) // Resta
console.log(x * y) // Multiplicacion
console.log(x / y) // Division (Devuelve un float)

console.log(x ** y) // Exponencial
console.log(x % y) // Modulo (Devuelve el resto de una division)

// Increment
x ++ // Incrementa el valor de la variable en 1
console.log(x)

// Decrement
y -- // Decrementa el valor de la variable en 1
console.log(y)

// Operadores de asignacion
let myV = 2
console.log(myV)
myV += 3 // es lo mismo que hacer mV = mV + 3 (y asi queda mejor) =D
console.log(myV)

myV -= 3 // Variaciones de las operaciones aritmeticas 7w7
myV *= 3
myV /= 3
myV %= 3

// Operadores de comparacion y sus variaciones
y = 3
console.log(x > y) // Mayor qie
console.log(x < y) // Menor que
console.log(x >= y)// Mayor o igual
console.log(x <= y)// Ya sabes
console.log(x == y) //! Aqui igualamos valores
console.log(x === y) //! Y aqui igualamos por identidad (Variable y valor)
console.log(x === "3") //! Si el tipo de valor no es el mismo devolvera false
console.log(x == "3") // JavaScript tiene la peculiaridad de que si comparas el valor de una variable con una cadena de texto, si el valor de la variable es un numero igualmente devolvera true si la cadena de texto resulta ser el mismo numero, no se si me entiedo xd
console.log(x != y) // No es igual que
console.log(x !== "3") // Tambien el contrario de igualdad por identidad

console.log(0 == false)
console.log(1 == false) // logica booleana, 0 es falso, 1 es verdadero, uno es malo otro es bueno etc
console.log(0 == " ") // si un string esta vacio, practicamente no tiene valor, por lo que es cero, osea false =]
console.log(undefined == null) // esto es true
console.log(undefined === null) //? esto es no (y no se por que xd, no termino de entender el resultado de la logica de "===" comparando terminos indefinidos y nulos) lo dejare para despues

// Truthy values (valores que son verdaderos)
//* son todos los numeros positivos y negativos menos el cero
//* son todos las cadenas de texo menos las vacias

// Falsy values, valores falsos pues (--__--)
/* 
   0
   0n (bigint)
   null
   undefined
   NaN
   El boolean false
   Cadenas de texto vacias
*/

// Operadores logicos (mis favoritos)
// "&&" (lo que vendria siendo "and" en python)
console.log(6 > 2 && 4 < 7)
console.log(6 > 2 && 4 > 7)
console.log(6 > 2 && 4 > 7 && 3 == 4 && x > 4) // y sigue y sigue
// "||" (lo que vendria siendo "or" en python)
console.log(6 > 9 || 4 < 7)
console.log(6 > 9 || 4 > 7)
console.log(6 > 9 || 4 > 7 || 6 >= 1 || 6 == 6)
console.log(6 > 9 || 4 > 7 || 3 == 4 && x > 4) // y asi una amalgama

// "not" (!) (lo que vendria siendo "not" en python, solo que aqui se usa "!" xd)
console.log(!(6 > 2 && 4 > 7))

// Operadores termarios
const RainWorld = true // my favorite videogame 7w7

RainWorld ? console.log("Esta lloviendo") : console.log("No esta lloviendo") // esto es basicamente un if else, si la variable es true se ejecutara lo que esta delante del "?" (me imagino que tambien aplicara en operaciones) y si es false se ejecutara lo qeu sigue del ":"

