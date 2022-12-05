import { Answer } from '../main';
import { FileReader } from '../fileReader';
import { Day } from './day';

export class DayThree implements Day {
  private readonly weightLookup =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  solveChallanges(): Answer {
    const fileContent = FileReader.readFile('day-three.txt');
    const split = fileContent.split('\n');

    let firstResult = 0;
    split.forEach((backpack) => {
      const duplicatedItem = this.identifyDublicates(backpack);
      firstResult += this.getWeight(duplicatedItem);
    });

    return { first: String(firstResult), second: 'NA' };
  }

  getWeight(input: string): number {
    const result = this.weightLookup.indexOf(input);
    if (result === undefined) {
      return 0;
    }
    return result + 1;
  }

  identifyDublicates(backpackContent: string): string {
    const length = backpackContent.length;
    const firstPocket = backpackContent.substring(0, length / 2);
    const secondPocket = backpackContent.substring(length / 2, length);
    let result = 'NA';
    firstPocket.split('').forEach((content) => {
      if (secondPocket.includes(content)) {
        result = content;
        return;
      }
    });
    return result;
  }
}
