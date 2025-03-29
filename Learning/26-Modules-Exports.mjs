// Exportacion de modulos

// Funciones
export function add(a, b){
    return a + b;
};

// Propiedades
export const pi = 3.1415892

 //Exportacion por defecto
export default function substract(a, b){
    return a - b;
}

// Clases

export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area (){
        return Math.PI * Math.pow(this.radius, 2)
    }
}

//export default class MyClass {
//    func (){
//        console.log("object");
//    }
//}

