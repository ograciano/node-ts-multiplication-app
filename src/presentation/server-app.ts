import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

interface RunOptiones {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    destination: string;
}

export class ServerApp {

    static run({base, limit, showTable, fileName, destination}: RunOptiones) {
        console.log('ServerApp running...');
        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile().execute({fileContent: table, destination, fileName});

        if (showTable) console.log(table);

        (wasCreated) ? console.log('Archivo creado') : console.log('No se pudo crear el archivo');
    }
}