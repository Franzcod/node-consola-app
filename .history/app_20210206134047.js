const fs = require('fs');

console.clear()

const base = 8;


console.log(":::::::::::::::::::::::::");
console.log(`      Tabla del: ${base} `);
console.log(":::::::::::::::::::::::::\n");

let salida = '';

for (let i = 1; i <= 10; i++){
    salida += `${base} x ${i} = ${base * i}\n`;
}

console.log(salida)

fs.writeFileSync(`tabla-${base}.txt`, salida);

console.log(`:::: tabla-${base}.txt creada ::::`)

