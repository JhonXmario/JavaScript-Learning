// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let x = 1; x < 21; x++) {
    console.log(x);
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let x = 0;
let y = 0;
while(y < 100){
    y +=1;
    x +=y;
} console.log(x);
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(let y = 1; y < 51; y ++){
    if (y % 2 == 0) {
        console.log(y);
    }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let array = ["Jhon", "Maria", "Juan", "Luis"];
for (const x of array) {
    console.log(x);
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let array2 = ["a", "e", "i", "o", "u"];
for (let z = 0; z < array2.length; z++) {
    console.log(z);
}
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let array3 = [32, 54, 76, 97, 12];
for (let a = 0; a < array3.length; a++) {
    console.log(array3[a]*a);
}
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let cinco = 0;
while(cinco < 50){
    cinco = cinco + 5;
    console.log(cinco);
}
// 8. Usa un bucle para invertir una cadena de texto
let texto = "Jhon Mario";
console.log(texto.length - 1)
let textoinvertido = ""
for (let q = texto.length - 1; q >= 0; q--) {
    textoinvertido += texto[q];
} console.log(textoinvertido);
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
//! Pendiente
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let list = [12, 33, 5, 7, 2, 8, 65, 23, 8, 56, 2, 4, 5, 78];
for (const count of list) {
    if (count > 10) {
        console.log(count);
    }
}