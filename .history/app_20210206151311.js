
const {crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs');
var colors = require('colors');


console.clear()



crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'Archivo .txt creado'))
    .catch( err => console.log(err));


