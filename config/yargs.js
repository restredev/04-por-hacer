const argv = require('yargs').command('crear', 'Crea un elemento del TO DO LIST', { descripcion: { demand: true, alias: 'd' } })
    .command('listar', 'Muestra todas las tareas', {})
    .command('actualizar', 'Actualiza una tarea', {
        descripcion: { demand: true, alias: 'd' },
        completado: {
            default: true,
            alias: 'c'
        }
    })
    .command('borrar', 'Borra un elemento del TO DO LIST', { descripcion: { demand: true, alias: 'd' } })
    .help().argv;

module.exports = { argv };