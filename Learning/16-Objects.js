// Objetos

// Sintaxis
let person = { // Este se parece mas a un diccionario en python
    name: "Jhon",
    age: "19",
    alias: "xyz"
}

// Acceso a las propiedades
// Notacion punto
console.log(person.name); //* Esta forma es mejor
// Notacion de corchetes
console.log(person["name"]);

// Modificacion
person.age = 20;
console.log(person.age);
person.age = "20"; // Tambien es posible cambiar el tipo de dato
console.log(person.age);

// Eliminar
delete person.age
console.log(person);

// Agregar
person.email = "Micorreo@gmail.com";
person.age = 19;
console.log(person);

// Metodos (funciones)
let person2 = {
    name: "Jhon",
    age: "19",
    alias: "xyz",
    walk: function(){
        console.log(`${this.name} Esta caminando`)
        // console.log(`${person2.name} Esta caminando`) Esta es otra forma
    }
}

person2.walk();

// Anidacion de objects
let person3 = {
    name: "Jhon",
    age: "19",
    alias: "xyz",
    walk: function(){
        console.log(`${person3.name} Esta caminando`)
    },
    job: {
        name: "Programador",
        Experiencia: "2 anios",
        work: function(){
            console.log("Trabajando")
        }
    }
}

console.log(person3);
console.log(person3.name);
console.log(person3.job);
console.log(person3.job.name);
person3.job.work();

let person4 = { 
    name: "Jhon",
    age: "19",
    alias: "xyz"
}
console.log(person == person4);
console.log(person === person4); // Los objetos no son iguales debido a que son referencias a diferentes lugares en la memoria
console.log(person.name == person4.name); // En cambio, los valores de las propiedades son iguales

// iteracion
for (const keys in person4) { // iterar usando in en un objeto devuelve las claves
    console.log(keys + ": " + person4[keys]); // Al iterar por cada clave de person4 usamos el llamado del valor por corchetes y como keys va a obtener cada clave del objeto al usar el llamado por [] accederemos a cada valor de cada clave
}

// Funciones con Objetos
function Person(name, age){ // Esto es un objeto pero no es buena practica, pues deberia de ser una clase
    this.name = name;
    this.age = age;
}
let person5 = new Person("Jhon", 19);
console.log(person5.name);
console.log(typeof person5);
console.log(typeof person4);

