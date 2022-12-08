import { Answer } from '../main';
import { FileReader } from '../fileReader';
import { Day } from './day';

export class DaySix implements Day {
  solveChallanges(): Answer {
    const input = FileReader.readFile('day-six.txt');
    return {
      first: this.findStartMarkerPositionV2(input, 4),
      second: this.findStartMarkerPositionV2(input, 14),
    };
  }

  findStartMarkerPositionV2(input: string, unuiqness: number): string {
    let cache = new Array<string>();
    const split = input.split('');
    let result = 'NA';

    for (let i = 0; i < split.length; i++) {
      const signal = split[i];
      if (cache.length === unuiqness) {
        if (this.areAllUnuiqueV2(cache)) {
          cache.reverse();
          cache.pop();
          cache.reverse();
          cache.push(signal);
        } else {
          result = String(i);
          break;
        }
      } else {
        cache.push(signal);
      }
    }
    return result;
  }

  areAllUnuiqueV2(input: string[]): boolean {
    return new Set(input).size !== input.length;
  }
}
