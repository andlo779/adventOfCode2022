import { DayOne } from './days/day-one';
import { DayTwo } from './days/day-two';
import { InputHandler } from './input-handler';

export type Answer = {
  first: string;
  second: string;
};

export class Main {
  private inputHandler = new InputHandler();

  async run(): Promise<void> {
    let run: boolean = true;

    const name = await this.welcome();

    while (run) {
      const answer = await this.inputHandler.getInput(
        '\nFor what day do you want the solution'
      );

      switch (answer) {
        case '1':
          this.printAnswer(new DayOne().solveChallange());
          break;
        case '2':
          this.printAnswer(new DayTwo().solveChallange());
          break;
        case 'h':
        case 'help':
        case 'Help':
          this.help();
          break;

        case 'e':
        case 'exit':
        case 'Exit':
        case 'q':
        case 'quit':
        case 'Quit':
          run = false;
          this.inputHandler.closeInput();
          break;

        default:
          this.print(
            'The requested day is not implemented yet. Please choose another day.'
          );
          break;
      }
    }

    this.print(`Thanks for today ${name}, hope to see you soon again!`);
  }

  private async welcome(): Promise<string> {
    const name = await this.inputHandler.getInput('What is your name');
    this.print(
      `Welcome ${name}! Her you can find my solutions for the Code of Advent 2022.`
    );
    return name;
  }

  private async help(): Promise<void> {
    let helpMsg =
      'This application will give you my solutions for any requested day.\nYou choos day by providing the date of the requested day.';
    this.print(helpMsg);
  }

  private print(input: string): void {
    console.log(input);
  }

  private printAnswer(answer: Answer): void {
    console.log(`The answer for first part is: ${answer.first},`);
    console.log(`and for the second part: ${answer.second}`);
  }
}
