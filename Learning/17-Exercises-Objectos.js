// 1. Crea un objeto con 3 propiedades
let person = {
    name: "Jhon",
    last_name: "Diaz",
    alias: "XYZ",
}
// 2. Accede y muestra su valor
console.log(person.name);
// 3. Agrega una nueva propiedad
person.age = 19;
// 4. Elimina una de las 3 primeras propiedades
delete person.alias;
console.log(person);
// 5. Agrega una función e invócala
person.rainworld = function(){
    console.log("The Watcher");
};
console.log(person);
// 6. Itera las propiedades del objeto
for (const key in person) {
    console.log(key);
}
// 7. Crea un objeto anidado
let ff = {
    name: "Terra",
    age: 23,
    powers: {
        dark: ["Arterma", "Fusion", "Thunder"],
        white: ["Cura+", "Lazaro", "Cura++"],
    }
}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(ff.powers)
// 9. Comprueba si los dos objetos creados son iguales
console.log(ff == person);
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(ff.name == person.name);