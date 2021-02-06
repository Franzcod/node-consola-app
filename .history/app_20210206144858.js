
const {crearArchivo } = require('./helpers/multiplicar.js');


const argv = require('yargs')
                .options('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                })
                .options('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false
                })
                .check( (argv, options) => {
                    if ( isNaN(argv.b)) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                
                .argv;

console.clear()


console.log(argv);

// const base = 9;



crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'ok'))
    .catch( err => console.log(err));


