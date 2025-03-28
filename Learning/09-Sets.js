// Sets
// Iniciarla
let set = new Set();
let set2 = {}; //! Esto en realidad no es un set
set = new Set(["Jhon", "Mario", 19, "MarioXYZ"]); // Un set debe de llevar []
console.log(set);
console.log(set2);

// Metodos comunes (add y delete)
set.add("Hunter"); // Agregar un nuevo elemento al set en el final
console.log(set);
set.delete("Jhon"); // Hay que especificar el valor para borrarlo
console.log(set);
console.log(set.delete("Jhon")); // Y si lo imprimes te devuelve true si fue borrado o false si no existe el elemento a borrar, y se puede experimentar con if y else

// has
console.log(set.has("Mario")); // Verifica si un elemeno existe y devuelve true o false
console.log(set.has("Jhon"));

// size
console.log(set.size); // Cuantos elementos tiene el set?

// Transformar un set a Array
let ma = Array.from(set); // Transformar un set a Array
console.log(ma);

// Transformar un array a un set
set = new Set(ma);
console.log(set);

// Los set no permiten elementos duplicados, a diferencia de ls arrays

set.add("Mario")
console.log(set)
// Pero solo si el elemento que se quiere ingresar es exactamente igual
set.add("mario")
console.log(set)