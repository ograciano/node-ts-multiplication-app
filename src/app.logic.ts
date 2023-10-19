import * as fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';
let outputMessage = '';

const {b:base, l:limit, s:showTable} = yarg;



let headerMessage = `
=============================
    Tabla del: ${base}
=============================\n`;



outputMessage = headerMessage + '\n' + outputMessage;
if (showTable) console.log(outputMessage);

// guardar en el archivo de texto la tabla de multiplicar del 5 ouptut/05-tabla-5.txt
const outputPath = 'outputs';
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFile(`${outputPath}/05-tabla-${base}.txt`, outputMessage, (err) => {
    if (err) throw err;
    console.log(`El archivo 05-tabla-${base}.txt ha sido creado`);
});
