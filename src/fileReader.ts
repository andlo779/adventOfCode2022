import { readFileSync } from 'fs';
import { join } from 'path';
import { ENCODING } from './constants';

export class FileReader {
  static readFile(fileName: string): string {
    return readFileSync(join(process.cwd(), `./inputs/${fileName}`), ENCODING);
  }
}
