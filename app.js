// Si hubieramos puesto cont multiplar, a la hora de llamar a la funcion crearArchivo, tendríamos que poner multiplicar.crearArchivo. Estamos usando la destructuracion de objetos
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;

const colors = require('colors/safe')

// dentro del yarg cogemos _ que contiene la lista de todos los comandos que se ejecutan
let comando = argv._[0];

switch(comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        //.then(archivo => console.log(`Archivo creado: ${archivo.green}`))
        .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
        .catch(err => console.log(err).red)
        break;
    default:
        console.log('Comando no reconocido');
}