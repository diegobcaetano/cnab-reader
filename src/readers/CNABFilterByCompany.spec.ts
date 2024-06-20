import { CNABFilterByCompany } from './CNABFilterByCompany'; // Replace with the actual path to your CNABFilterByCompany class
import { CNABRecord } from './CNABRecord';

describe('CNABFilterByCompany', () => {
    describe('filter', () => {
        it('returns empty array for no matching company', () => {
            const records = [
                { body: { company: 'Company A' } },
                { body: { company: 'Company B' } },
            ] as CNABRecord[];

            const filter = new CNABFilterByCompany(records);
            const filteredRecords = filter.filter('company X');

            expect(filteredRecords).toEqual([]);
        });

        it('filters records by company name (case-insensitive)', async () => {
            const records = [
                { body: { company: 'Company One' } },
                { body: { company: 'Company Two' } },
                { body: { company: 'company three' } },
            ] as CNABRecord[];

            const filter = new CNABFilterByCompany(records);
            const filteredRecords = filter.filter('COMPany');

            expect(filteredRecords.length).toBe(3);
            expect(filteredRecords[0].body.company).toContain('Company');
        });
    });
});
