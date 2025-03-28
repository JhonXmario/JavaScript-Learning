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
class Aves{
    constructor(name, canto){
        this.name = name;
        this.canto = canto;
    }
    cantos(){
        console.log("El Ave Canta");
    }
}

class Pato extends Aves{
    constructor(name, canto, color){
        super(name, canto);
        this.color = color;
    }
}
let pato = new Pato("Pato", "Cuack", "Verde");
let paloma = new Pato("Paloma", "Ruu", "Azul");
let ave = new Aves();
console.log(pato);
console.log(paloma);
pato.cantos();
// 7. Crea una clase que haga uso de getters y setters
class GetSet{
    #name;
    #age;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }

    get names(){
        return this.#name;
    }
    
    set age(newAge){
        this.#age = newAge;
    }
}


// 8. Modifica la clase con getters y setters para que use propiedades privadas
//* Ya lo hice en la clase GetSet
// 9. Utiliza los get y set y muestra sus valores
let getset = new GetSet("Juan", 20);
console.log(getset.names); // Se puede acceder a una propiedad privada con un getter
getset.age = 25; // Se puede cambiar el valor de una propiedad privada con un setter
// 10. Sobrescribe un método de una clase que utilice herencia 
class Perro extends Aves{
    constructor(name){
        super(name);
    }
    cantos(){
        console.log("El Perro Ladra");
    }   
}
let perro = new Perro("Perro");
perro.cantos();
