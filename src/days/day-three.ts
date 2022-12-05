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

    let secondResult = 0;
    for (let i = 0; i < split.length; i += 3) {
      const badge = this.findBadge(split[i], split[i + 1], split[i + 2]);
      secondResult += this.getWeight(badge);
    }

    return { first: String(firstResult), second: String(secondResult) };
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

  findBadge(
    firstBackpack: string,
    secondBackpack: string,
    thirdBackpack: string
  ): string {
    let result = 'NA';
    firstBackpack.split('').forEach((item) => {
      if (secondBackpack.includes(item) && thirdBackpack.includes(item)) {
        result = item;
        return;
      }
    });
    return result;
  }
}
