
const {crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs');
var colors = require('colors');


console.clear()



crearArchivo(argv.b, argv.l)
const texto = 'Archivo .txt creado'.bgCyan;
    .then(nombreArchivo => console.log(nombreArchivo, texto))
    .catch( err => console.log(err));


