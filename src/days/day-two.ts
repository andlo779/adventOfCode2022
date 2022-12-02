import { Answer } from '../main';
import { FileReader } from '../fileReader';

export class DayTwo {
  solveChallange(): Answer {
    const fileContent = FileReader.readFile('day-two.txt');
    const list = fileContent.split('\n');
    let firstResult = 0;
    list.forEach((g) => {
      const game = this.parsGameRound(g);
      firstResult += this.calculateScore(game.first, game.second);
    });
    return { first: String(firstResult), second: 'NA' };
  }

  private parsGameRound(input: string): { first: string; second: string } {
    const split = input.split(' ');
    return { first: split[0], second: split[1] };
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
}
