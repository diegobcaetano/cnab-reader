import { CNABRecord } from '../readers/CNABRecord';

export interface IExporter {
  export(records: CNABRecord[], outputPath: string): void;
  
}
