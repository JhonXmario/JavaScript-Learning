// Metodos de consola

// log
console.log("Hola");

// error
console.error("Este es un mensaje de error");
console.error("Error al conectarse a la base de datos: ", new Error("Conexion fallida"));

// war
console.warn("Advertencia");

// info
console.info("Esto es informacion adicional");

// table
let data = [
    ["Jhon", 19, "XYZ"],
    ["Miguel", 37, "alias"],
    ["Miguel", 37, "NOse"],
    ["Miguel", 37, "SSS"]
]
console.table(data)

data = [
    {name: "Jhon", age: 19, alias: "XYZ"},
    {name: "Sara", age: 23, alias: "SOPA"},
    {name: "Rudy", age: 15, alias: "Ruuu"}
]

console.table(data)

// group
console.group("Usuario: ");
console.log("Nombre: Jhon");
console.log("Edad: 19");
console.groupEnd();
console.log("WACHOOOOOOOOOOOOOOOOOOOO");

// time
console.time('Tiempo');
for (let i = 0; i < 10000; i++) {
    
}
console.timeEnd('Tiempo');

// assert
let age = 15;
console.assert(age >= 18, "El usuario debe de ser mayor de edad");

// count
console.count("Click");
console.count("Click");
console.count("Click");
console.countReset("Click");

// trace
console.trace("Seguimiento");

function funcA(){
    funcB()
};
function funcB(){
    console.trace("Seguimiento");
};

funcA();

// clear
console.clear();