const opts = {
    // Creamos un argumento para el comando
    base: {
        // requerimos el argumento(obligatorio)
        demand: true,
        // En vez de escribir --base podemos reducir poniendo solo b
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')

// creamos un comando que vamos a poner en la consola, el primer parametro sera el nombre del comando y el segundo el texto que va a salir en consola cuando ejecutemos dicho comando
.command('listar','Imprime en consola la tabla de multiplicar', opts)
.command('crear','Genera un archivo con la tabla de multiplicar', opts).help().argv;

module.exports = {
    argv
}