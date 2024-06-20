import { IExporter } from './IExporter';
import { JSONExporter } from './JSONExporter';
import { writeFileSync } from 'fs';

export class ExporterFactory {
  public static getExporter(type: string): IExporter {
    switch (type.toLowerCase()) {
      case 'json':
        //It is sync for the sake of simplicity. But, it could starve the memory in case of long files
        //better with streams and reads in chunks
        return new JSONExporter(writeFileSync);
      // case 'csv':
      //   return new CSVExporter();
      // case 'xml':
      //   return new XMLExporter();
      default:
        throw new Error('Tipo de exportador não suportado.');
    }
  }
}
