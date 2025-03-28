// Importacion
// funciones

import { add, Circle, pi, } from "./26-Modules-Exports.js";

// Funciones
console.log(add(8, 2));
console.log(pi);

//Clases
let circle = new Circle(10)
console.log(circle);
console.log(circle.area().toFixed(2)); // Esto es nuevo, toFixed permite poner cuantos desimales quieres mostrar

// Importacion por defecto
//console.log(substract(4, 5));

//let myclass = new rest()
//myclass.func()

// Proyecto modular
// import { MyClass } from ".26-Modules-Exports";
