// 1. Crea un array que almacene cinco animales
let animals = ["Toro", "Cocodrilo", "Caiman", "Halcon", "Tortuga"];
// 2. Añade dos más. Uno al principio y otro al final
animals.unshift("Elefante"); 
animals.push("León"); 
console.log(animals);
// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 1); // si se borra un elemento dentro de un console log lo que se mostrara seraa el valor eliminado
console.log(animals);
// 4. Crea un set que almacene cinco libros
let set = new Set(["La divina comedia", "Crimen y castigo", "La Odisea", "El Principito", "Nosferatu"]);
console.log(set);
// 5. Añade dos más. Uno de ellos repetido
set.add("El libro de bill");
set.add("La Odisea");
console.log(set);
// 6. Elimina uno concreto a tu elección
set.delete("El Principito");
console.log(set)
// 7. Crea un mapa que asocie el número del mes a su nombre
let map = new Map()
map = new Map ([ //! RECUERDA QUE TIENES QUE INICIAR EL MAPA CON NEW MAP
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(map.has(4));
// 9. Añade al mapa una clave con un array que almacene los meses de verano
let verano = ["Julio", "Agosto", "Septiembe"];
map.set(verano, "Verano");
console.log(map);
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let z = [3 , 5, 6, 8];
console.log(z);
let x = new Set(z);
console.log(x);
map.set(x, "Numeros");
console.log(map);