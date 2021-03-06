//import { writeFileSync } from 'fs';
const fs = require('fs');
var colors = require('../lib/index');


const crearArchivo = async ( base = 1 ) =>  {


    try {
        console.log(":::::::::::::::::::::::::");
        console.log(`      Tabla del: `, base);
        console.log(":::::::::::::::::::::::::\n".red.bold);

        let salida = '';

        for (let i = 1; i <= 10; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida )
        //console.log('Make it bold and red'.red.bold);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `:::: tabla-${base}.txt creada ::::`
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    crearArchivo,
}