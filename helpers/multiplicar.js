const fs = require('fs');
const { resolve } = require('path');
const color = require('colors');
const crearArchivo = (base=5,listar=false,hasta=10)=>{
    return new Promise((resolve,reject)=>{
        let salida=``;
        let consola=``;
        for (let i = 1; i <= hasta; i++) {
            salida +=`${base} x ${i} = ${base*i}\n`;
            consola +=`${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }
        if(listar){
            console.log('==============='.green);
            console.log('Tabla del ',color.blue(base));
            console.log('==============='.green);
            console.log(consola);
        }
        fs.writeFile(`./salida/tabla-${base}.txt`,salida,(err)=>{
            if(err) reject(err);
            resolve(`tabla-${base}.txt`)
        });
    })
}

module.exports = {
    crearArchivo
}