//import { writeFileSync } from 'fs';
const fs = require('fs');
var colors = require('colors');


const crearArchivo = async ( base = 1 , listar = false ) =>  {


    try {
        
        let salida = '';

        for (let i = 1; i <= 10; i++){
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        if (listar == true){
            console.log('::::::::::::::::::::::::::::'.blue);
            console.log(`      Tabla del: `.green, colors.green(base));
            console.log('::::::::::::::::::::::::::::\n'.blue);
            console.log(salida);

        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `:::: tabla-${base}.txt  ::::`.bgMagenta

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    crearArchivo,
}