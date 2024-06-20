import { CNABRecordBody } from "../readers/CNABRecord";

export class SegmentQ {
    parseLine(line: string): CNABRecordBody {
        return {
            company: line.substring(33, 73).trim(),
            address: `${line.substring(73, 108).trim()}, ${line.substring(108, 128).trim()} - ${line.substring(136, 151).trim()}/${line.substring(151, 153).trim()}, ${line.substring(128, 136).trim()}`,
        };
    }
}