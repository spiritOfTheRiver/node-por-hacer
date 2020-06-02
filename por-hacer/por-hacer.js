const fs = require('fs');
const colors = require('colors');

let listadoPorhacer = [];

const guardaDB = () => {
    const data = JSON.stringify(listadoPorhacer);
    fs.writeFile('db/data.json', 
        data, 
        (err) => {
            if (err) throw new Error(err);
        });
}

const cargarDB = () => {
    try {
        listadoPorhacer=require('../db/data.json');  
    } catch (error){
        listadoPorhacer=[];
    }
    
}

const crear = descripcion => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado:false
    };
    listadoPorhacer.push( porHacer );
    guardaDB();
    return porHacer;
}

const print = () => {
    console.log(`=========================`.yellow);
    console.log(`Tarea,Estado`);
    console.log(`=========================`.yellow);
    listadoPorhacer.forEach(porHacer => {
        console.log(`${porHacer.descripcion.green}, ${porHacer.completado?"Completado".blue:"Sin realizar".red}`);
    });
}

const getListar = () => {
    cargarDB();
    print();    
}

const getActualizar = (descripcion, completado = true) => {
    cargarDB();
    const porHacer=listadoPorhacer.find( porHacer => porHacer.descripcion === descripcion );
    if (porHacer){
        porHacer.completado=completado;
        guardaDB();    
    }
    return porHacer;
}

const borrar = (descripcion) => {
    cargarDB();
    listadoPorhacer=listadoPorhacer.filter( porHacer => porHacer.descripcion !== descripcion );
    guardaDB();
    print();
}

module.exports = {
    crear,
    getListar,
    getActualizar,
    borrar
}   