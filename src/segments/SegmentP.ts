import { CNABRecordHeader } from "../readers/CNABRecord";

export class SegmentP {
    parseLine(line: string): CNABRecordHeader {
        return {
            bankCode: line.substring(0, 3),
            batch: line.substring(3, 7),
            registerType: line.substring(7, 8),
            recordNumber: line.substring(8, 13),
            segment: line.substring(13, 14),
            bankCodeRemitter: line.substring(14, 17),
            currencyCode: line.substring(17, 19),
            branchCode: line.substring(19, 24),
            accountNumber: line.substring(24, 36),
            walletCode: line.substring(36, 41),
            ourNumber: line.substring(41, 51),
            dueDate: line.substring(51, 57),
            value: line.substring(57, 70),
            payerDocumentType: line.substring(70, 71),
            payerDocumentNumber: line.substring(71, 84),
            payerName: line.substring(84, 124).trim(),
            issueDate: line.substring(124, 130),
            occurrences: line.substring(130, 140),
            bankCodeBeneficiary: line.substring(140, 143),
            branchCodeBeneficiary: line.substring(143, 148),
            accountNumberBeneficiary: line.substring(148, 160),
            agencyAccountDigit: line.substring(160, 161)
        };
    }
}