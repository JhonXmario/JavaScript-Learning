// Destructuracion y propagacion
let my_array = ["Jhon", "Mario", 19];
let person = { 
    name: "Jhon",
    age: "19",
    alias: "xyz"
};

let myValue = my_array[1];
console.log(myValue);
let myName = person.name;
console.log(myName + "\n");
// Esto es una manera de alamcenar valores de objetos, arrays, etc a varibles, pero no es destructuracion

// Destructuracion

// Sintaxis en arrays
let [mv0, mv1, mv2] = my_array; // Se asigna a cada variable el valor de la posicion correspondiente en el array
console.log(mv0);
console.log(mv1);
console.log(mv2 + "\n");

// Sintaxis de arrays con valores predeterminados
[mv0, mv1, mv2, mv3 = "Marioxyz"] = my_array; // Se puede asignar un valor predeterminado a una variable en caso de que no exista un valor en la posicion correspondiente
console.log(mv0);
console.log(mv1);
console.log(mv2);
console.log(mv3 + "\n");

// ignorar elementos del array
[mv4, , mv6] = my_array; // al hacer esto se ignoran los elementos que no se asignan a una variable, en este caso se ignora el elemento en la posicion 1 usando una coma
console.log(mv4);
console.log(mv6 + "\n");

// Sintaxis en objetos
let {name, age, alias} = person; // Se asigna a cada variable el valor de la propiedad correspondiente en el objeto, pero el nombre de la variable debe ser igual al de la clave en el objeto
// Si la clave no existe en el objeto, la variable asignada sera undefined
console.log(name);
console.log(age);
console.log(alias + "\n");

// Sintaxis de objetos con valores predeterminados
{name, age, alias, email = "Marrio333@gmail.com"} person; // Se puede asignar un valor predeterminado a una variable en caso de que no exista una propiedad en el objeto
console.log(name);
console.log(age);
console.log(alias);
console.log(email + "\n");

// Cambiar el nombre de la variable
let {name: name2, age: age2, alias: alias2} = person; // al ser nuevas variables, se pueden nombrar como se desee y se tiene que inicializar con let, ya que son nuevas variables
console.log(name2);
console.log(age2);
console.log(alias2 + "\n");


// Destructuracion con objetcos anidados
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

let {name: name3, job: {name: namejob}} = person3; // para llamar a una propiedad anidada se usa la misma sintaxis de la destructuracion
console.log(name3);
console.log(namejob + "\n");

// Propagacion (...)
// Sintaxis propagacion
let my_array2 = [...my_array]; // Se puede copiar un array con la propagacion

let my_array3 = [...my_array, 4, 5] // Se puede agregar elementos a un array con la propagacion
console.log(my_array2);

// Combinacion de objetos
let myArray4 = [...my_array2, ...my_array3]; // Se pueden combinar arrays con la propagacion
console.log(myArray4);

// Sintaxis de propagacion en objetos
let person4 = {...person, phone: "123456789"}; // Se pueden agregar propiedades a un objeto con la propagacion
console.log(person4);
