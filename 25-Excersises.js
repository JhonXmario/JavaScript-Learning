// 1. Crea un función que utilice error correctamente
function logError() {
    console.error("Este es un mensaje de error");
}

// 2. Crea una función que utilice warn correctamente
function logWarning() {
    console.warn("Este es un mensaje de advertencia");
}

// 3. Crea una función que utilice info correctamente
function logInfo() {
    console.info("Este es un mensaje informativo");
}

// 4. Utiliza table
let person = [
    {nombre: "Jhon", age: 19},
    {nombre: "Saul", age: 3},
    {nombre: "Samuel", age: 5},
]
console.table(person)
// 5. Utiliza group
console.group("Slugcats");
console.log("Survivor");
console.log("Monk");
console.log("Hunter");
console.log("Wacho");
// 6. Utiliza time
console.time("Timer");
for (let i = 0; i < 1000000; i++){}
console.timeEnd("Timer");

// 7. Valida con assert si un número es positivo
let number = 5;
console.assert(number > 0, "El número no es positivo");

// 8. Utiliza count
console.count("Contador");
console.count("Contador");
console.count("Contador");

// 9. Utiliza trace
function traceExample() {
    console.trace("Rastreo de la función");
}
traceExample();

// 10. Utiliza clear
console.clear();