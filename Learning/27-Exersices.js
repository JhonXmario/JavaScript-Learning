import substract, { add, Circle, pi } from "./26-Modules-Exports.mjs";

// 1. Exporta una función
export function hell(){
    console.log("HELL")
};
// 2. Exporta una constante
export const tant = 4;
// 3. Exporta una clase
export class MyClass{  
    so() {
        console.log("so");
    }
}
// 4. Importa una función
add(4, 5)
// 5. Importa una constante
console.log(pi);
// 6. Importa una clase
let x = new Circle(10)
console.log(x)
// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function x(){
    console.log("object");
}
//export default const y = 6;

//export default class Class{
    
//}
//* Lo demas no lo permite
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
// Ni lo voy a intentar
// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior