import fs from 'fs';

export interface ISaveFileUseCase {
    execute(options: SaveFileOptions): boolean;
}

export interface SaveFileOptions {
    fileContent: string;
    destination?: string;
    fileName?: string;
}

export class SaveFile implements ISaveFileUseCase {
    constructor(
    ) {}

    execute({fileContent, destination = 'outputs', fileName='table'}: SaveFileOptions) {

        try {
            const outputPath = destination;
            fs.mkdirSync(outputPath, { recursive: true });
            fs.writeFileSync(`${outputPath}/${fileName}.txt`, fileContent);
            return true;
            
        } catch (error) {
            console.log(error);
            return false;
        }
        
    }
}