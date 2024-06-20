import { IExporter } from './IExporter';
import { CNABRecord } from '../readers/CNABRecord';
import * as fs from 'fs';
import { OutputFormat } from './OutputFormat';
import { PathOrFileDescriptor, WriteFileOptions } from 'fs';

//TODO: could work with the interface
type WriteFileFunction = (
    file: PathOrFileDescriptor,
    data: string | NodeJS.ArrayBufferView,
    options?: WriteFileOptions
  ) => void

export class JSONExporter implements IExporter {
    
    private fileWriter: WriteFileFunction

    constructor(fileWrite: WriteFileFunction) {
        this.fileWriter = fileWrite;
    }

    public export(records: CNABRecord[], outputPath: string): void {
        this.fileWriter(outputPath, this.parse(records), 'utf-8');
    }

    private parse(records: CNABRecord[]): string {
        return JSON.stringify(this.format(records), null, 2);
    }

    private format(records: CNABRecord[]): OutputFormat[] {
        return records.map(record => {
            return {
                company: record.body.company,
                address: record.body.address,
                startLine: record.startLine
            };
        });
    }
}
