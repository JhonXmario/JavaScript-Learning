// Importa el módulo 'events' de Node.js, que permite trabajar con eventos personalizados.
const EventEmitter = require('events');

// Crea una instancia de EventEmitter para manejar eventos relacionados con productos.
// Este objeto se usará para emitir y escuchar eventos personalizados.
const emisor_productos = new EventEmitter();

// Registra un listener (escuchador) para el evento 'compra'.
// Cuando se emite el evento 'compra', se ejecutará esta función con los parámetros 'total' y 'numprod'.
emisor_productos.on('compra', (total, numprod) => {
    // Muestra en la consola el mensaje con el total de la compra.
    console.log(`Se realizo una compra por $${total}`);
    // Muestra en la consola el número de productos comprados.
    console.log(`Numero de productos: ${numprod}`);
});

// Emite el evento 'compra' con los valores 500 (total) y 5 (número de productos).
// Esto activará el listener registrado anteriormente.
emisor_productos.emit('compra', 500, 5); 