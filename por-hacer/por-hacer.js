const fs = require('fs');
let listadoPorHacer = [];

const grabarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('NO SE PUEDO GRABAR');

    });
};

const cargarDB = () => {

    listadoPorHacer = require('../db/data.json');
    return listadoPorHacer;


};

const crear = (descripcion) => {


    try {
        cargarDB();
    } catch (err) {
        console.log('El programa corre por primera vez');
    }

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    grabarDB();
    return porHacer;


};

const actualizarTarea = (descripcion, estado) => {

    cargarDB();

    for (let i = 0; i < listadoPorHacer.length; i++) {
        let objeto = listadoPorHacer[i];
        if (objeto.descripcion === descripcion) {
            objeto.completado = estado;
            console.log('se cambió el estado');
        }
    }

    grabarDB();
};

const borrarTarea = (descripcion) => {
    cargarDB();
    for (let i = 0; i < listadoPorHacer.length; i++) {
        let objeto = listadoPorHacer[i];
        if (objeto.descripcion === descripcion) {
            listadoPorHacer.splice(i, 1);
            console.log('Se borró al tarea');
        }
    }
    grabarDB();

};

module.exports = {
    crear,
    cargarDB,
    actualizarTarea,
    borrarTarea
}