
const {crearArchivo } = require('./helpers/multiplicar.js');

console.clear()

const base = 9;



crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'ok'))
    .catch( err => console.log(err));


