//import { writeFileSync } from 'fs';
const fs = require('fs');





const crearArchivo = async ( base = 1 ) =>  {


    console.log(":::::::::::::::::::::::::");
    console.log(`      Tabla del: `, base);
    console.log(":::::::::::::::::::::::::\n");

    let salida = '';

    for (let i = 1; i <= 10; i++){
        salida += `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida)

    writeFileSync(`tabla-${base}.txt`, salida);

    return `:::: tabla-${base}.txt creada ::::`
}

export default {
    crearArchivo,
}