import { CNABReader } from './CNABReader';

describe('CNABReader', () => {
    describe('readRecords', () => {
        it('throws error for invalid number of lines', async () => {
            const invalidLines = ['line1', 'line2'];
            const reader = new CNABReader();
            
            expect(() => reader.readRecords(invalidLines)).toThrow(Error);
        });

        it('throws error for line length less than 239', async () => {
            const invalidLines = ['line1', 'line2 with less than 239 chars'];
            const reader = new CNABReader();

            expect(() => reader.readRecords(invalidLines)).toThrow(Error);
        });

        it('parses valid CNAB records', async () => {
            const validLines = [
                'header line 1',
                'header line 2',
                // Sample data lines
                '0010001300001P 010307080000001500074032761460000000723   70000175/1          0702202100000000049900000000 02N060120211000000000000000000000000000000000000000000000000000000000000000000000000000000000258600000000722      3000000090000000000', // Replace with actual data lines from your sample file
                '0010001300002Q 012005437734000407NTT BRASIL COMERCIO E SERVICOS DE TECNOLAVENIDA DOUTOR CHUCRI ZAIDAN, 1240 ANDARVILA SAO FRANCI04711130SAO PAULO      SP0000000000000000                                        000                           ',
                '0010001300003R 01000000000000000000000000000000000000000000000000000000000000000000000000                                                                                                              00000000000000000000000000000000        ',
                // ... more data lines
                '00199999......',
            ];
            const reader = new CNABReader();
            const records = reader.readRecords(validLines);

            expect(records.length).toBeGreaterThan(0);
            expect(records[0]).toHaveProperty('header');
            expect(records[0]).toHaveProperty('body');
            expect(records[0]).toHaveProperty('startLine');
        });

        it('skips header and footer lines', async () => {
            const lines = [
                'header line 1',
                'header line 2',
                '0010001300001P 010307080000001500074032761460000000723   70000175/1          0702202100000000049900000000 02N060120211000000000000000000000000000000000000000000000000000000000000000000000000000000000258600000000722      3000000090000000000', // Replace with actual data lines from your sample file
                '0010001300002Q 012005437734000407NTT BRASIL COMERCIO E SERVICOS DE TECNOLAVENIDA DOUTOR CHUCRI ZAIDAN, 1240 ANDARVILA SAO FRANCI04711130SAO PAULO      SP0000000000000000                                        000                           ',
                '0010001300003R 01000000000000000000000000000000000000000000000000000000000000000000000000                                                                                                              00000000000000000000000000000000        ',
                'footer line 1',
                'footer line 2',
            ];
            const reader = new CNABReader();
            const records = reader.readRecords(lines);

            expect(records.length).toBe(1);
        });
    });
});
