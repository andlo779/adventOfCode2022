import * as readline from "readline/promises";

export class InputHandler {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async getInput(displayMessage: string): Promise<string> {
    const question = `${displayMessage}?\n> `;
    let answer: string;
    try {
      answer = await this.rl.question(question);
    } finally {
      this.rl.write;
      // this.rl.close();
    }
    return answer;
  }

  async closeInput(): Promise<void> {
    this.rl.close();
  }
}
