import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { ExporterFactory } from '../outputs/ExporterFactory';
import { FileUtil } from '../utils/FileUtil';
import { CLIOptions } from './CLIOptions';
import { CNABReader } from '../readers/CNABReader';
import { CNABFilterByCompany } from '../readers/CNABFilterByCompany';
import * as fs from 'fs';

const argv = yargs(hideBin(process.argv))
    .options({
        segment: { type: 'string', demandOption: false, describe: 'Segment type' },
        company: { type: 'string', demandOption: false, describe: 'Company name' },
        file: { type: 'string', demandOption: false, describe: 'Path to CNAB file' },
        output: { type: 'string', demandOption: false, describe: 'Path to output file' },
        type: { type: 'string', demandOption: false, describe: 'Exporter type (json)', default: 'json' },
    })
    .help()
    .argv as CLIOptions;

function main() {
    const filePath = argv.file || FileUtil.getDefaultFilePath();

    if (!FileUtil.fileExists(filePath)) {
        console.error(`CNAB file not found at: ${filePath}`);
        process.exit(1);
    }

    //It is sync for the sake of simplicity. But, it could starve the memory in case of long files
    //better with streams and reads in chunks
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    //TODO: validate the file content and extension

    //This could evolve to handle many CNAB types as we are dealing with interfaces
    const cnabReader = new CNABReader();
    let records = cnabReader.readRecords(lines);

    if (argv.segment) {
        //TODO: Ask in the interview how would that work;
        console.error(`It is not implemented. I did not understand how would this feature work.`);
        process.exit(1);
    }

    if (argv.company) {
        records = new CNABFilterByCompany(records).filter(argv.company);
    }

    if (argv.output) {
        const exporterType = argv.type || 'json';
        try {
            const exporter = ExporterFactory.getExporter(exporterType);
            exporter.export(records, argv.output);
            console.log(`Data exported to ${argv.output}`);
        } catch (error) {
            if (typeof error === 'object' && error instanceof Error) {
                console.error(error.message);
            } else {
                console.error("Unknown error:", error);
            }
        }
    }
}

try {
    main();
} catch (err) {
    console.error(`Error processing CNAB file: ${err}`);
}
