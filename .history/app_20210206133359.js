const fs = require('fs');

console.clear()

const base = 5;


console.log(":::::::::::::::::::::::::");
console.log(`::: Tabla del: ${base} `);
console.log(":::::::::::::::::::::::::");

let salida = '';

for (let i = 1; i <= 10; i++){
    salida += console.log(`${base} x ${i} = ${base * i}`);
}

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`tabla-${base} creada`);
});

