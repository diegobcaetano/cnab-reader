import { CNABRecord } from './CNABRecord';

export interface ICNABReader {
  readRecords(): Promise<CNABRecord[]>;
}
