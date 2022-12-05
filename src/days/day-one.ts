import { Answer } from '../main';
import { FileReader } from '../fileReader';
import { Day } from './day';

type ElfCalories = {
  id: number;
  amount: number;
};

export class DayOne implements Day {
  solveChallanges(): Answer {
    const res = FileReader.readFile('day-one.txt');
    const split = res.split('\n');

    const list = this.transformToElfCaloryList(split);
    const result1 = this.findElfWithMostCalories(list);
    const result2 =
      this.findThreeELfsWithMostCaloriesAndCalulateAmountOfCalories(list);

    return { first: String(result1), second: String(result2) };
  }

  private transformToElfCaloryList(list: string[]): ElfCalories[] {
    const result = new Array<ElfCalories>();
    let calories = 0;
    let elfIndex = 1;

    list.forEach((row) => {
      if (row.trim() === '') {
        result.push({ id: elfIndex, amount: calories });
        calories = 0;
        ++elfIndex;
      } else {
        calories += Number(row);
      }
    });
    result.push({ id: elfIndex, amount: calories });
    return result;
  }

  private findElfWithMostCalories(list: ElfCalories[]): number {
    let result = 0;
    list.forEach((ec) => {
      if (ec.amount > result) {
        result = ec.amount;
      }
    });
    return result;
  }

  private findThreeELfsWithMostCaloriesAndCalulateAmountOfCalories(
    list: ElfCalories[]
  ): number {
    const sortedList = list.sort((n1, n2) => {
      if (n1.amount < n2.amount) {
        return 1;
      }

      if (n1.amount > n2.amount) {
        return -1;
      }

      return 0;
    });

    let result = sortedList[0].amount;
    result += sortedList[1].amount;
    result += sortedList[2].amount;
    return result;
  }
}
