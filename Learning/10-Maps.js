// Mapas

// Declaracion

let map = new Map();
console.log(map);

// Inicializacion

map = new Map([
    ["Name", "Jhon"],
    ["Last Name", "Diaz"],
    ["Age", 19]
])

console.log(map);

// Metodos y propiedades

// Sets (Crea una nueva clave con su valor o actualiza el valor de una existente)
map.set("Alias", "MarioXYZ");
console.log(map);
map.set("Last Name", "Tubinez");
console.log(map);

// get (Toma el valor de una clave)
console.log(map.get("Alias"));
console.log(map.get("Router"));

// has (Verifica si una clave existe y devuelve true o false)
console.log(map.has("Alias"));
console.log(map.has("Router"));

// delete (borrar una clave existente y su valor)
map.delete("Alias");
console.log(map);

// keys (Muestra un listado de las claves)
console.log(map.keys());
// values (Muestra un listado de los valores)
console.log(map.values());
// entries (Muestra listado de las clave: valor)
console.log(map.entries());

// Size (muestra la cantidad de claves en un mapa)
console.log(map.size);

// clear (Limpia el mapa)
map.clear();
console.log(map);
