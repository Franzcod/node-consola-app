//import { writeFileSync } from 'fs';
const fs = require('fs');
var colors = require('colors');


const crearArchivo = async ( base = 1 , listar = false ) =>  {


    try {
        
        let salida = '';

        for (let i = 1; i <= 10; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar == true){
            console.log(':::::::::::::::::::::::::');
            console.log(`      Tabla del: `, base);
            console.log(":::::::::::::::::::::::::\n");
            console.log(salida )

        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `:::: tabla-${base}.txt  ::::`.red.bold

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    crearArchivo,
}