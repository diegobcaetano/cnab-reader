import { CNABRecord } from './CNABRecord';
import { SegmentQ } from '../segments/SegmentQ';
import { SegmentP } from '../segments/SegmentP';

export class CNABReader implements CNABReader {

    readRecords(lines: string[]): CNABRecord[] {
        const records: CNABRecord[] = [];

        //TODO: Improve file validation
        if (lines.length < 3 || lines[2].length < 239) {
            throw Error(`Invalid lines in file`);
        }

        // Skip the first two lines (headers) and the last two lines (footers)
        for (let i = 2; i < lines.length - 2; i += 3) {
            const lineP = lines[i];
            const lineQ = lines[i + 1];

            const cnabRecord: CNABRecord = {
                header: new SegmentP().parseLine(lineP),
                body: new SegmentQ().parseLine(lineQ),
                startLine: i,
            };
            records.push(cnabRecord);
        }

        return records;
    }
}
