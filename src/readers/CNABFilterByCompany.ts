import { CNABRecord } from "./CNABRecord";
import { ICNABFilter } from "./ICNABFilter";

export class CNABFilterByCompany implements ICNABFilter {

    private records: CNABRecord[];

    constructor(records: CNABRecord[]) {
        this.records = records;
    }
    
    filter(term: string): CNABRecord[] {
        return this.records.filter(record =>
            record.body.company.toLowerCase().includes(term.toLowerCase()));
    }

}