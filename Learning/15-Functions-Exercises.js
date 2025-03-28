// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b){
    return a + b;
}
console.log(x = sum(5, 6));
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let array = [13, 43, 23, 87, 54];
function mayor(x) {
    let list = array[0];
    for (const i of x) {
        if (i > list) {
            list = i;
        }
    }
    console.log(list);
}
mayor(array);
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let vocals = "Sopas";
function t(y) {
    for (const i of y) {
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
            console.log(i);
        }
    }
}
t(vocals);
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
array = ["Jhon", "Mario", "Diaz", "Tubinez", "xyz"];
function mayus(myArray) {
        return myArray.map(str => str.toUpperCase()); //? tengo que entender mejor esto con mas practicas
    }
let s = mayus(array);
console.log(s);
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function primo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i == 0) {
            return false;
        }        
    } 
    return true;
}
x = primo(79)
console.log(x);
x = primo(8)
console.log(x);
x = primo(11)
console.log(x);
x = primo(99)
console.log(x);

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let aray = ["Jhon", "Socrates", "Diaz"];
let aray2 = ["Diavlo", "Jhon", "Dias", "Diaz"];
function igual(x, y) {
    let z = []
    for (const i of x) {
        for (const j of y) {
            if (i == j) {
                z.push(i);
            }
        }
    }
    return z;
}
let result = igual(aray, aray2)
console.log(result);
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let aray3 = [4, 5, 6, 7, 8, 9, 10];
let c = 0
function pares(numbers) {
    for (const i of numbers) {
        if (i % 2 == 0) {
            c += i;
        }
    }
    console.log(c);
}
pares(aray3)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let aray4 = [4, 5, 6, 7, 8, 9, 10];
function cuadrado(numbers2) {
    return numbers2.map(str => str ** 2)
}
x = cuadrado(aray4);
console.log(x);

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let l = "nohJ"
let ll = ""
function revers(text){
    for (let i = l.length - 1; i >= 0; i--) {
        ll += l[i];     
    }
    console.log(ll);
    
}
revers(l);
// 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
    let su = 1
    for (let i = n; i > 0; i--) {
        su *= i;
    }
    return su;
}
let num = 5;
console.log(`El factorial de ${num} es: ${factorial(num)}`);