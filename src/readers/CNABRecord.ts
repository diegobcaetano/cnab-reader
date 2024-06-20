export interface CNABRecordHeader {
    bankCode: string;
    batch: string;
    registerType: string;
    recordNumber: string;
    segment: string;
    bankCodeRemitter: string;
    currencyCode: string;
    branchCode: string;
    accountNumber: string;
    walletCode: string;
    ourNumber: string;
    dueDate: string;
    value: string;
    payerDocumentType: string;
    payerDocumentNumber: string;
    payerName: string;
    issueDate: string;
    occurrences: string;
    bankCodeBeneficiary: string;
    branchCodeBeneficiary: string;
    accountNumberBeneficiary: string;
    agencyAccountDigit: string;
}

export type CNABRecordBody = {
    company: string;
    address: string;
}

export type CNABRecord = {
    header: CNABRecordHeader,
    body: CNABRecordBody,
    startLine: number
}

