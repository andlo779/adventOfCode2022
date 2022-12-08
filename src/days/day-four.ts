import { Answer } from '../main';
import { FileReader } from '../fileReader';
import { Day } from './day';

type Range = {
  start: number;
  end: number;
};

export class DayFour implements Day {
  solveChallanges(): Answer {
    const res = FileReader.readFile('day-four.txt');
    const split = res.split('\n');

    let firstResult = 0;
    let secondResult = 0;

    split.forEach((pair) => {
      const splitPair = pair.split(',');
      if (this.isFullyCoveredByOne(splitPair[0], splitPair[1])) {
        ++firstResult;
      }
      if (this.isPartlyCoveredByOne(splitPair[0], splitPair[1])) {
        ++secondResult;
      }
    });

    return { first: String(firstResult), second: String(secondResult) };
  }

  isFullyCoveredByOne(first: string, second: string): boolean {
    const firstRange = this.getRange(first);
    const secondRange = this.getRange(second);

    if (
      firstRange.start >= secondRange.start &&
      firstRange.end <= secondRange.end
    ) {
      return true;
    }

    if (
      secondRange.start >= firstRange.start &&
      secondRange.end <= firstRange.end
    ) {
      return true;
    }

    return false;
  }

  isPartlyCoveredByOne(first: string, second: string): boolean {
    const firstRange = this.getRange(first);
    const secondRange = this.getRange(second);

    if (
      (firstRange.start >= secondRange.start &&
        firstRange.start <= secondRange.end) ||
      (firstRange.end >= secondRange.start && firstRange.end <= secondRange.end)
    ) {
      return true;
    }

    if (
      (secondRange.start >= firstRange.start &&
        secondRange.start <= firstRange.end) ||
      (secondRange.end >= firstRange.start && secondRange.end <= firstRange.end)
    ) {
      return true;
    }

    return false;
  }

  getRange(input: string): Range {
    const split = input.split('-');
    return { start: Number(split[0]), end: Number(split[1]) };
  }
}
