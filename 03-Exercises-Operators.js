// 1. Crea una variable para cada operación aritmética
let suma = 3 + 3;
let resta = 5 - 2;
let multiplicacion = 6 * 2;
let division = 8 / 2;
let modulo = 10 % 4;
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asignacion = 10;
asignacion += suma;
asignacion -= resta;
asignacion *= multiplicacion;
asignacion /= division;
asignacion %= modulo;
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 == 5);
console.log(8 > 3);
console.log(4 <= 4);
console.log(66 == "66");
console.log(75 != 54);
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(2 == 8);
console.log(8 < 3);
console.log(4 != 4);
console.log(66 > "66");
console.log(75 === 54);
// 5. Utiliza el operador lógico and
console.log(4 != 7 && 3 > -2);
// 6. Utiliza el operador lógico or
console.log(9 >= 3 || 3 < -2);
// 7. Combina ambos operadores lógicos
console.log(5 > 3 && 4 < 3 || 54 != 65);
// 8. Añade alguna negación
console.log(!(5 > 3));
// 9. Utiliza el operador ternario
let termux = false
termux ? console.log("No eres root? que mal") : console.log("Eres root? eres Dios");
// 10. Combina operadores aritméticos, de comparáción y lógicas
let x = 6;
let y = 8;
console.log(!(y == 8 && y < 15 == x + 4));