import { Answer } from '../main';
import { FileReader } from '../fileReader';
import { Day } from './day';

export class DayTwo implements Day {
  solveChallanges(): Answer {
    const fileContent = FileReader.readFile('day-two.txt');
    const list = fileContent.split('\n');

    let firstResult = 0;
    list.forEach((g) => {
      const game = this.parsGameRound(g, false);
      firstResult += this.calculateScore(game.first, game.second);
    });

    let secondResult = 0;
    list.forEach((g) => {
      const game = this.parsGameRound(g, true);
      secondResult += this.calculateScore(game.first, game.second);
    });

    return { first: String(firstResult), second: String(secondResult) };
  }

  private parsGameRound(
    input: string,
    isStrategy: boolean
  ): { first: string; second: string } {
    const split = input.split(' ');
    if (isStrategy) {
      return this.translateFromStrategyToGamePlay(split[0], split[1]);
    } else {
      return { first: split[0], second: split[1] };
    }
  }

  private calculateScore(first: string, second: string): number {
    let result = 0;
    switch (first) {
      case 'A':
        result += this.handleRock(second);
        break;
      case 'B':
        result += this.handlePaper(second);
        break;
      case 'C':
        result += this.handleScissor(second);
        break;
    }
    result += this.handleMyInput(second);
    return result;
  }

  private handleRock(second: string): number {
    let result = 0;
    switch (second) {
      case 'X':
        result += 3;
        break;
      case 'Y':
        result += 6;
        break;
      case 'Z':
        result += 0;
        break;
    }
    return result;
  }

  private handlePaper(second: string): number {
    let result = 0;
    switch (second) {
      case 'X':
        result += 0;
        break;
      case 'Y':
        result += 3;
        break;
      case 'Z':
        result += 6;
        break;
    }
    return result;
  }

  private handleScissor(second: string): number {
    let result = 0;
    switch (second) {
      case 'X':
        result += 6;
        break;
      case 'Y':
        result += 0;
        break;
      case 'Z':
        result += 3;
        break;
    }
    return result;
  }

  private handleMyInput(second: string): number {
    let result = 0;
    switch (second) {
      case 'X':
        result += 1;
        break;
      case 'Y':
        result += 2;
        break;
      case 'Z':
        result += 3;
        break;
    }
    return result;
  }

  private translateFromStrategyToGamePlay(
    first: string,
    second: string
  ): {
    first: string;
    second: string;
  } {
    let result = { first: first, second: 'NA ' };
    switch (first) {
      case 'A':
        result.second = this.handleRockStrateg(second);
        break;
      case 'B':
        result.second = this.handlePaperStrateg(second);
        break;
      case 'C':
        result.second = this.handleSiccorsStrateg(second);
        break;
    }
    return result;
  }

  private handleRockStrateg(input: string): string {
    let result = 'NA';
    switch (input) {
      case 'X':
        result = 'Z';
        break;
      case 'Y':
        result = 'X';
        break;
      case 'Z':
        result = 'Y';
        break;
    }
    return result;
  }

  private handlePaperStrateg(input: string): string {
    let result = 'NA';
    switch (input) {
      case 'X':
        result = 'X';
        break;
      case 'Y':
        result = 'Y';
        break;
      case 'Z':
        result = 'Z';
        break;
    }
    return result;
  }

  private handleSiccorsStrateg(input: string): string {
    let result = 'NA';
    switch (input) {
      case 'X':
        result = 'Y';
        break;
      case 'Y':
        result = 'Z';
        break;
      case 'Z':
        result = 'X';
        break;
    }
    return result;
  }
}
