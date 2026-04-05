const fs = require('node:fs');

//const { promisify } = require('node:util');
//const readFilePromise = promisify(fs.readFile);//Solo cuando no hay promesas nativas

console.log('Leyendo el primer archivo...')
const text = fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text);
}
);

console.log('haciendo cosas nazis')

console.log('Leyendo el segundo archivo...')
const text2 = fs.readFile('./archivo2.txt', 'utf-8', (err, text2) => {
    console.log(text2);
}
);

