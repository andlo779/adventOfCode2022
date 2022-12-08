import { Answer } from '../main';
import { FileReader } from '../fileReader';

import { Day } from './day';
import { create } from 'domain';

type Instruction = {
  amount: number;
  from: number;
  to: number;
};

type Stack = {
  name: string;
  crates: string[];
};

export class DayFive implements Day {
  solveChallanges(): Answer {
    const res = FileReader.readFile('day-five.txt');
    return this.processInput(res);
  }

  processInput(input: string): Answer {
    const split = input.split('\n');
    const metaData = this.parsMetaData(split);

    const stacks = new Array<string[]>();
    for (let i = 0; i < metaData.numberOfStacks; i++) {
      stacks.push(new Array<string>());
    }

    this.parsStacks(split.slice(0, metaData.startOfInstructions - 2), stacks);
    const stacks2 = JSON.parse(JSON.stringify(stacks));
    const instuctions = split.slice(metaData.startOfInstructions);
    instuctions.forEach((instruction) => {
      this.performMove(this.parsInstruction(instruction), stacks, false);
    });

    instuctions.forEach((instruction) => {
      this.performMove(this.parsInstruction(instruction), stacks2, true);
    });

    return {
      first: this.getTopCrates(stacks),
      second: this.getTopCrates(stacks2),
    };
  }

  parsMetaData(input: string[]): {
    numberOfStacks: number;
    startOfInstructions: number;
  } {
    let shouldCount = true;
    let rowNumber = 0;
    let numberOfStacks = 0;
    input.forEach((row) => {
      if (row.charAt(1) === '1') {
        numberOfStacks = Number(row.charAt(row.length - 2));
        shouldCount = false;
        return;
      }
      if (shouldCount) {
        ++rowNumber;
      }
    });
    return {
      numberOfStacks: numberOfStacks,
      startOfInstructions: rowNumber + 2,
    };
  }

  pushCrate(stack: number, crate: string, stacks: string[][]): void {
    stacks[stack - 1].push(crate);
  }

  getCrate(stack: number, stacks: string[][]): string | undefined {
    return stacks[stack - 1].pop();
  }

  isCrate(input: string): boolean {
    const result = input.match('^[A-Z]');
    return result ? true : false;
  }

  parsStacks(input: string[], stacks: string[][]): void {
    input.forEach((row) => {
      for (let i = 0; i < row.length; i++) {
        const crate = row.charAt(i);
        if (this.isCrate(crate)) {
          this.pushCrate(this.translatePossitionToStack(i), crate, stacks);
        }
      }
    });
    stacks.forEach((stack) => {
      stack.reverse();
    });
  }

  translatePossitionToStack(possition: number): number {
    if (possition === 1) {
      return 1;
    } else {
      return Math.floor(possition / 4) + (possition % 4);
    }
  }

  parsInstruction(instruction: string): Instruction {
    const split = instruction.split(' ');
    return {
      amount: Number(split[1]),
      from: Number(split[3]),
      to: Number(split[5]),
    };
  }

  performMove(
    instructtion: Instruction,
    stacks: string[][],
    newVersion: boolean
  ): void {
    if (newVersion) {
      let temp = new Array<string>();
      for (let i = 0; i < instructtion.amount; i++) {
        const crate = this.getCrate(instructtion.from, stacks);
        if (crate) {
          temp.push(crate);
        }
      }
      temp.reverse();
      temp.forEach((crate) => {
        this.pushCrate(instructtion.to, crate, stacks);
      });
    } else {
      for (let i = 0; i < instructtion.amount; i++) {
        const crate = this.getCrate(instructtion.from, stacks);
        if (crate) {
          this.pushCrate(instructtion.to, crate, stacks);
        }
      }
    }
  }

  getTopCrates(stacks: string[][]): string {
    const result = new Array<string>();
    stacks.forEach((stack) => {
      result.push(stack[stack.length - 1]);
    });
    return result.join('');
  }
}
