const { boolean } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require('colors');
console.clear();

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo=>{console.log(nombreArchivo.rainbow,'Creado');})
    .catch(err=>console.log(err));
