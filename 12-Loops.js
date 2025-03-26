// Bucles

// for
/* El primer argumento es la declaracion de la variable y su valor para iniciar
   El segundo es la condicion para que se repita, en este caso es que x sea menor a 5
   Y el tercer argumento es la operacion que se realizara, en este caso x aumenara en 1 */
for(let x = 0; x < 5; x++){
    console.log(`Numbers: ${x}`);
}

const numbers = [1, 2, 3, 4, 5];
for(let x = 0; x < 5; x++){
    console.log(`Numeron: ${numbers[x]}`); // Uuuuu que logica interesante
}

const numbers2 = [1, 2, 3, 4, 5];
for(let x = 0; x < numbers2.length; x++){
    console.log(`Numero: ${x}`);
}

// While
let x = 0;
while (x < 5) {
    console.log(`Numero: ${x}`);
    x++;
}

while (x < numbers.length) {
    console.log(`Nome: ${numbers2[x]}`);
    x++;
}

// do while (El bucle while no se ejecuta si no se cumple su condicion, el do while se ejecuta al menos 1 vez asi sea que no se cumpla su condicion)
x = 7;
do {
    console.log(`Numero: ${x}`);
    x++;
} while (x < 5);

// for of (Itera obre una estructura de datos, como arrays, sets y maps)
let string = "My String";
let array = [13, 43, 23, 87, 54];
let set = new Set(["Jhon", "Mario", 19, "MarioXYZ"]);
let map = new Map([
    ["Name", "Jhon"],
    ["Last Name", "Diaz"],
    ["Age", 19]
])

for (const y of array) {
    console.log(y);
}
for (const y of set) {
    console.log(y);
}
for (const y of map) {
    console.log(y);
}
for (const y of string) {
    console.log(y);
}

// buenas practicas
// break y continue
for(let x = 0; x < 10; x++){
    if (x == 5) {
        continue; // El continue es para saltarse una iteracion, trabaja junto con el if para declarar la iteracion a saltar
    }else if(x == 7){
        break; // Rompe el bucle, con el if especificamos cuando
    }
    console.log(`Numbers: ${x}`);
}