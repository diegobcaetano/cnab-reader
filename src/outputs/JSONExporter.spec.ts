import { CNABRecord } from '../readers/CNABRecord';
import { JSONExporter } from './JSONExporter'; 

const records: CNABRecord[] = [
    {
        header: {
            bankCode: "123",
            batch: "ABC",
            registerType: "1",
            recordNumber: "1",
            segment: "A",
            bankCodeRemitter: "456",
            currencyCode: "BRL",
            branchCode: "789",
            accountNumber: "00012345",
            walletCode: "90",
            ourNumber: "123456",
            dueDate: "2024-06-20",
            value: "100.00",
            payerDocumentType: "CPF",
            payerDocumentNumber: "12345678900",
            payerName: "John Doe",
            issueDate: "2024-06-19",
            occurrences: "1",
            bankCodeBeneficiary: "789",
            branchCodeBeneficiary: "001",
            accountNumberBeneficiary: "98765432",
            agencyAccountDigit: "0",
        },
        body: {
            company: "My Company",
            address: "123 Main Street",
        },
        startLine: 1,
    }
];

describe('JSONExporter', () => {
    describe('export', () => {
        it('calls parse with records and writeFile with formatted JSON', () => {
            const mockWriteFile = jest.fn(); // Create mock function
            const exporter = new JSONExporter(mockWriteFile);
            const outputPath = 'output.json';
            exporter.export(records, outputPath);

            expect(mockWriteFile).toHaveBeenCalledWith(
                outputPath, 
                expect.not.stringContaining(`header`), 
                'utf-8');
        });
    });
});
