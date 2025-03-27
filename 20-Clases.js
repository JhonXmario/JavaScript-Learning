// Clases (son funciones que se utilizan para crear objetos)
// Sintaxis de una clase
class Person {
    constructor(name, age, alias){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

let person = new Person("Jhon", 19, "XYZ"); // Se crea un objeto con la clase Person
let person2 = new Person("Mario", 20, "ZYX");
console.log(person);
console.log(person2);

// Con valores por defecto
class DefaultPerson {
    constructor(name = "Sin nombre", age = "Sin edad", alias = "Sin alias"){
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}
let person3 = new DefaultPerson();
let person4 = new DefaultPerson("Raul");
console.log(person3);
console.log(person4);

// Acceso a propiedades
console.log(person3.alias);
console.log(person3["alias"]); // Se puede acceder a las propiedades de un objeto con corchetes
person3.alias = "Nuevo alias"; // Se puede cambiar el valor de una propiedad de un objeto
console.log(person3.alias);

class Libro {
    constructor(nombre, autor, genero){
        this.nombre = nombre;
        this.autor = autor;
        this.genero = genero;
    }
    info(){
        console.log(`El libro ${this.nombre} fue escrito por ${this.autor} y es de genero ${this.genero}`);
    }
}

let libro = new Libro("El principito", "Antoine de Saint-Exupéry", "Cuento");
let libro2 = new Libro("Nozferatu", "Mario", "Terror");
console.log(libro);
console.log(libro2);
libro.info();

// Propiedades privadas
class PrivatePersona {

    #bank; // Se puede declarar una propiedad privada con el simbolo #

    constructor(name, age, alias, bank){
        this.name = name;
        this.age = age;
        this.alias = alias;
        this.#bank = bank;
    }
    pay(){
        this.#bank
    }
}
let person5 = new PrivatePersona("Jhon", 19, "XYZ", "342534534");
// console.log(person5.bank); No podemos acceder a una propiedad privada
// person5.bank = "123123123"; No podemos cambiar el valor de una propiedad privada, solo creamos una nueva
console.log(person5);


// getters y setters
class GetSetPersona {
    #name;
    #age;
    #alias;
    #bank;
    constructor(name, age, alias, bank){
        this.#name = name;
        this.#age = age;
        this.#alias = alias;
        this.#bank = bank;
    };
    get name(){ // Se puede crear un getter para acceder a una propiedad privada, no es una funcion, es un metodo, solo que tambien se crea un nombre para acceder a la propiedad
        return this.#name;
    };  

    set bank(newbank){ // Se puede crear un setter para cambiar el valor de una propiedad privada, no es una funcion, es un metodo, solo que tambien se crea un nombre para cambiar el valor de la propiedad
        this.#bank = newbank;
    };
};

let person6 = new GetSetPersona("Jhon", 19, "XYZ", "342534534");
console.log(person6);
console.log(person6.name); // Se puede acceder a una propiedad privada con un getter

person6.bank = "123123123"; // Se puede cambiar el valor de una propiedad privada con un setter

// Herencia
class Animal {
    constructor(name){
        this.name = name;
    };
    eat(){
        console.log(`${this.name} esta comiendo`);
    };
};
class Dog extends Animal{
    eat(){
        console.log(`${this.name} esta comiendo croquetas`);
    }
    run(){
        console.log(`${this.name} esta corriendo`);
    };
};

class Fish extends Animal{
    constructor(name, size){
        super(name);
        this.size = size;
    }
    swin(){
        console.log(`${this.name} esta nadando`);
    };
};

let mydog = new Dog("Firulais");
let myfisgh = new Fish("Nemo", 5);
mydog.run();
mydog.eat();
myfisgh.swin();
myfisgh.eat();

// metodos estaticos (son metodos que se pueden llamar sin instanciar la clase)
class Math{
    static sum(a, b){
        return a + b;
    }
    static res(a, b){
        return a - b;
    }
    static mul(a, b){
        return a * b;
    }
    static div(a, b){
        return a / b;
    }
}
console.log(Math.sum(2, 3))


//let operation = new Math();
// operation.sum(2, 3);