// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let my_array = ["Jhon", "Mario", 19];
let [mv0, mv1] = my_array;
console.log(mv0);
console.log(mv1 + "\n");
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [mv2, mv3, mv4, mv5 = "Marioxyz"] = my_array;
console.log(mv5 + "\n");
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = { 
    name: "Jhon",
    age: "19",
    alias: "xyz"
};
let {name, age} = person;
console.log(name);
console.log(age + "\n");
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name: name2, age: age2} = person;
console.log(name2);
console.log(age2 + "\n");
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let person3 = {
    rr: "Jhon",
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
let {job: {name: namejob}, job: {Experiencia: Experienciajob}} = person3;
console.log(namejob);
console.log(Experienciajob + "\n");
// 6. Usa propagación para combinar dos arrays en uno nuevo
let my_array2 = ["Diaz", "Tubinez", "Arroz"];
let my_array3 = [...my_array, ...my_array2];
console.log(my_array3);
// 7. Usa propagación para crear una copia de un array
let my_array4 = [...my_array];
console.log(my_array4);
// 8. Usa propagación para combinar dos objetos en uno nuevo
let person2 = { 
    name: "Diaz",
    age: "Tubinez",
    alias: "Arroz"
};
let person4 = {...person2, ...person3};
console.log(person4);
// 9. Usa propagación para crear una copia de un objeto
console.log({...person});
// 10. Combina desestructuración y propagación
let [mv6, mv7, ...mv8] = my_array2;
console.log(mv6);