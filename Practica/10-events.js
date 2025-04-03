// los eventos son una forma de manejar la asincronía en node.js
// el modulo events es un modulo nativo de node.js que nos permite crear y manejar eventos personalizados
// un evento es una acción que ocurre en el sistema y que puede ser escuchada por otros componentes del sistema
// para eso creamos un objeto de la clase EventEmitter y luego le decimos que escuche un evento en particular
// y luego le decimos que hacer cuando ese evento ocurra
// el evento se emite con el metodo emit y le pasamos el nombre del evento y los datos que queremos enviar

const EventEmitter = require('events')

const customEmitter = new EventEmitter();

customEmitter.on('res', (data, secondata) => {
    console.table(data);
    console.table(secondata);
})

customEmitter.emit('res', {name: "Jhon", id: 3}, [2, 5, 6])