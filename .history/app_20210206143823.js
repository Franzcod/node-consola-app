
const {crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('yargs')
                .options('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                })
                .check( (argv, options) => {
                    console.log('yargs', argv);
                })
                .argv;

console.clear()


console.log(argv);

// const base = 9;



// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'ok'))
//     .catch( err => console.log(err));


