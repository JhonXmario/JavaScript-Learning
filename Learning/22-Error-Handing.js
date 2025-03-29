// Manejo de Errores
// try, catch, finally

// Produce una excepción
let myObject;
//console.log(myObject.name)

// Tratamiento de errores

// try-catch
try {
    console.log(myObject.name);
    console.log('No se produce error');
} catch{
    // Bloque de código que se ejecuta si se produce un error
    console.log('Error');
};

// Captura el error y lo muestra
try {
    console.log(myObject.name);
    console.log('No se produce error');
} catch (error) {
    // Bloque de código que se ejecuta si se produce un error
    console.log('Error: ', error.message, '\n');
};

// Bloque finally
try {
    console.log(myObject);
    console.log('No se produce error');
} catch (error) {
    // Bloque de código que se ejecuta si se produce un error
    console.log('Error: ', error.message, '\n');
} finally {
    // Bloque de código que se ejecuta siempre
    console.log('Este bloque se ejecuta siempre');
};

// Lanzamiento de errores
// throw
//throw new Error("Error lanzado por el usuario");




function sumIntegers(a, b){
    if (typeof a !== "number" || typeof b !== "number") { // Si no son numeros, lanzamos un error
        throw new TypeError("Esta operacion solo suma numeros");      
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operacion solo suma numeros enteros"); // Hemos lanzado un error de lo que paso
    };

    if (a == 0 || b == 0) {
        throw new MyCustomZeroSumError("Se esta intentando sumar cer0", a, b)
    }
    return a + b;
};


try{
    console.log(sumIntegers(4, 2));
    console.log(sumIntegers(4.3, 2));
    console.log(sumIntegers("4", 2));
}
catch (error){ // Y lo hemos capturado para mostrar lo que sucedió en el throw
    console.log('Error: ', error.message, '\n');
}



// Capturar varios tipos errores
try{
    console.log(sumIntegers(4, 2));
    console.log(sumIntegers("4", 2));
} catch(e){
    if(e instanceof TypeError){
        console.log('Error de tipo: ', e.message, '\n'); // Error de tipo
    } else if(e instanceof Error){
        console.log('Error: ', e.message, '\n'); // Error de otro tipo
    }
}


// Crear excepciones perzonalizadas
class MyCustomZeroSumError extends Error{
    constructor(message, a, b){
        super(message);
        this.a = a;
        this.b = b;
    };

    print_numbers(){
        console.log(this.a, " + ", this.b);
    };
};

try{
    console.log(sumIntegers(0, 2));
} catch(e){
    console.log('Error: ', e.message, '\n');
    e.print_numbers();
}