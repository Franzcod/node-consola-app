


const argv = require('yargs')
                .options('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la multiplicacion'
                })
                .options('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Mostrar o no la tabla en consola'
                })
                .check( (argv, options) => {
                    if ( isNaN(argv.b)) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })

                .argv;




module.exports = argv;