// Funciones

function funct() {
    console.log("hola");
}
funct();

// con parametros
function my_function(a, b) {
    console.log(a + b);
}
my_function(4, 4);

function my_func(a) {
    console.log(`Hola, ${a}`);
}
my_func("Jhon");

//Funciones anonimas (Es crear una funcion sin nombre dentro de una variable o constante)
const funk = function (b) {
    console.log(`Hola, ${b}`);
}
funk("Mario")

// Arrow Functions
const x = (name) => {
    console.log(`Jhon ${name}`);
}
x("Mario")

const xz = (name) => console.log(`Jhon ${name}`); // Tambien se puede en una linea
xz("Mario")

// Parametros
function fun(a = 3, b = 3) { // Seria buena practica establecer valores para los parametros por el caso de que no se le pase ningun valor y devuelva NaN
    console.log(a + b);
}
fun(4);

// Retorno de valores
function sum(m, n){
    return m + n;
}
let result = sum(3, 5);
console.log(result);

// Funciones anidadas
function extern(){
    console.log("Funcion externa");
    function intern(){
        console.log("Funcion interna");
    }
    intern();
}
extern();
// intern(); ////// Fuera del scope
extern();

// Funciones de orden superior
function Applyfunc(funx, param) {
    funx(param) //? Aun no entiendo bien esto
}
Applyfunc(xz, ("Funcion de orden superior"))

// continuo aqui