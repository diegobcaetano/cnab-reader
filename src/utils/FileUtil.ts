import * as fs from 'fs';
import * as path from 'path';

export class FileUtil {
  public static getDefaultFilePath(): string {
    return path.resolve(__dirname, '../../cnab.example.txt');
  }

  public static fileExists(filePath: string): boolean {
    return fs.existsSync(filePath);
  }
}
