import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'limite de la tabla de multiplicar'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'tabla',
        describe: 'Nombre del archivo'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'Directorio donde se guardara el archivo'
    })
    .check((argv, options) => {
        if(argv.b < 1) throw 'La base tiene que ser mayor a 1'
        return true;
    })
    .parseSync();