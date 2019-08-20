//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        porHacer.crear(argv.descripcion);
        console.log(argv.descripcion);
        break;
    case 'listar':
        let listado = porHacer.cargarDB();
        console.log('==========TO DO LIST============'.green);
        for (let i = 0; i < listado.length; i++) {
            let objeto = listado[i];
            console.log(`Tarea ${i+1}: ${objeto.descripcion} | Completado: ${objeto.completado} `.blue);
        }
        console.log('==============END==============='.green);
        break;
    case 'actualizar':
        porHacer.actualizarTarea(argv.descripcion, argv.completado);
        console.log(`La tarea ${argv.descripcion} ahora está Completada: ${argv.completado}`);
        break;
    case 'borrar':
        porHacer.borrarTarea(argv.descripcion);
        break;
    default:
        break;

}