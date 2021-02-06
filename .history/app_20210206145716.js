
const {crearArchivo } = require('./helpers/multiplicar.js');



console.clear()



crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'Archivo .txt creado'))
    .catch( err => console.log(err));


