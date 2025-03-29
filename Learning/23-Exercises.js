// 1. Captura una excepción utilizando try-catch
let object;

try {
    console.log(object.name);
} catch (e) {
    console.log("Error: ", e.message);
};
// 2. Captura una excepción utilizando try-catch y finally
let object2;

try {
    console.log(object2.name);
} catch (e) {
    console.log("Error: ", e.message);
} finally {
    console.log("Operacion finalizada");
};
// 3. Lanza una excepción genérica
try {
    throw new Error("Esta es una excepción genérica");
} catch (e) {
    console.log("Error capturado: ", e.message);
};
// 4. Crea una excepción personalizada
class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError"; // Nombre personalizado para la excepción
    }
}
// 5. Lanza una excepción personalizada
try {
    throw new MyError("Personalizada");
} catch (error) {
    console.log(`${error.name}: ${error.message}`); // Muestra el nombre y el mensaje del error
}
// 6. Lanza varias excepciones según una lógica definida
function sum(a, b){
    if (a < 0 || b < 0) {
        throw new Error("No se permite sumar numeros negativos aqui"); 
    } else if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Estos no son numeros"); 
    } else if(a === 0 || b === 0){
        throw new Error("No se permiten sumar ceros"); 
    };
    console.log(a + b);
};
try {
    //sum(4, 0);
    //sum("4", 2);
    //sum(-3, -2);
    //sum(4, -3);
    sum(4, 3);
} catch (e) {
    console.log("Error", e.message);
};
// 7. Captura varias excepciones en un mismo try-catch
try {
    let num = "abc";
    console.log(num.toFixed(2)); 
} catch (e) {
    if (e instanceof TypeError) {
        console.log("Error de tipo");
    } else if (e instanceof Error) {
        console.log("Error genérico");
    } else {
        console.log("Error desconocido");
    }
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let float = ["3.53", "sgr","5.43","ily","42.11","1.44",];
for (const i of float) {
    console.log(`Procesando: ${i}`);
    if (isNaN(i)) {
        console.log(`${i} No es un numero, fuera de aqui`)
    } else{
        console.log(parseFloat(i));
    }
}
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
let obj = {
    name: "Jhon",
    age: "19",
    alias: "xyz"
};

class MyCustomError extends Error{
    constructor(message){
        super(message);
    };
};

function verify(ob){
    if (typeof ob.age !== "number") {
        throw new MyCustomError(`${ob.age} No es un numero, es un String: ${typeof ob.age}`);
    }
}

try {
    verify(obj)
} catch (error) {
    console.log(error.message)
}
// 10. Crea una función  que realice reintentos en caso de error hasta un máximo de 10
let dojbet
let x = 0
while(x < 10){
    try {
        throw new Error("Error propio");

    } catch (e) {
        x++
        console.log(`Error, intento #${x}`, e.message)
    }
}
