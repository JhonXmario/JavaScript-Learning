// 1. Crea una clase que reciba dos propiedades
class Sum {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    // 2. Añade un método a la clase que utilice las propiedades
    sum() {
        return this.a + this.b;
    }
    // 3. Añade un método estático a la primera clase
    static multiply(a, b) {
        return a * b;
    }
    
}

// 4. Muestra los valores de las propiedades e invoca a la función
let sum = new Sum(2, 3);
console.log(`Valor de a: ${sum.a}`);
console.log(`Valor de b: ${sum.b}`);
sum.sum();
console.log(`La suma de a y b es: ${sum.sum()}`);
// 5. Haz uso del método estático
console.log(Sum.multiply(2, 3));
// 6. Crea una clase que haga uso de herencia
class Rest extends Sum{
    rest(a, b){
        return a - b;
    }
}

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 