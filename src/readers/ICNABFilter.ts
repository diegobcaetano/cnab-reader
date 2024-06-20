import { CNABRecord } from "./CNABRecord";

export interface ICNABFilter {
    filter(term: string): CNABRecord[];
}