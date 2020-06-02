
const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcíon de la tarea por hacer"
}

const completado = {
    default: true,
    alias: 'c',
    desc: "Marca como co,pletado o pendiente la tarea por hacer",
    type: 'boolean',
}

const optCr={
    descripcion
};

const optAc ={
    descripcion,
    completado 
}

const optBrr = {
    descripcion
}

const argv = require('yargs')
                .command('crear', 'Crea un elemento por hacer', optCr)
                .command('actualizar', 'Actualiza el estado completado de una tarea', optAc)
                .command('borrar', 'Borrar un elemento por hacer', optBrr)                
                .help()
                .argv;

module.exports = {
    argv
}   