// Arrays

let array = [13, 43, 23, 87, 54]; // Es mejor usar esta
let my_array = new Array("Jhon", "Mario", 19);

console.log(array);
console.log(my_array);

myArray2 = new Array(3);
myArray2[0] = 'Jhon';
myArray2[1] = 'Mario';
myArray2[3] = 'Diaz';
console.log(myArray2);

myArray = [];
myArray[1] = 'Y';
myArray[2] = 'Z';
myArray[0] = 'X';
console.log(myArray);

// Metodos comunes (push y pop)
myArray = [];

myArray.push("Survivor"); // Agregar valores en una lista
myArray.push("Monk");
myArray.push("Hunter");
console.log(myArray);

let hunter = console.log(myArray.pop()); // Elimina el ultimo vaor de la lista especificada y lo devuelve, y se pueden hacer varias cosas, como almacenarlo en una variable
console.log(myArray);

myArray.shift(); // elimina el primer elemento del array y lo devuelve
console.log(myArray);

myArray.unshift("Survivor", "Hunter"); // anade nuevos elementos al principio
console.log(myArray);

// Length
console.log(myArray.length); // Cuantos elementos tiene el array?

// Clear
// myArray = [] // Esta es la mejor
myArray.length = 0; // Alternativa, Estas son las formas de vaciar un array
console.log(myArray);

// slice
myArray = ["Jhon", "Mario", 19, "MarioXYZ"];
let new_array = myArray.slice(1, 3); // Permite crear un nuevo array con los valores que especifiques (el ultimo numero no se cuenta, si no el anterior)
console.log(new_array);

// splice

myArray.splice(1, 3) // Elimina los elementos en el indice que se especifique para comenzar y cuantos elementos se eliminaran
console.log(myArray)

myArray = ["Jhon", "Mario", 19, "MarioXYZ"];
console.log(myArray)
myArray.splice(1, 2, "nuevo elemento") // El primer argumento es en donde empezaras a eliminar, el segundo es cuantos, el tercero es un reemplazo
console.log(myArray)

