
const { argv } = require('./config/yargs');
const { crear, getListar, getActualizar, borrar } = require('./por-hacer/por-hacer');

if (argv._.find( comando => comando==="crear" )){
    const tarea = crear(argv.descripcion);
    console.log(tarea);
} else if (argv._.find( comando => comando==="listar" )){
    getListar();
} else if (argv._.find( comando => comando==="actualizar" )){
    const tarea = getActualizar(argv.descripcion,argv.completado);
    console.log(tarea?tarea:"No se encontro elemento");
} else if (argv._.find( comando => comando==="borrar" )){
    borrar(argv.descripcion);    
} else {
    console.log("Comando no reconocido!");
}

borrar

