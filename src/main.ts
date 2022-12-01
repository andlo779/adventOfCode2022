import { InputHandler } from "./input-handler";

export class Main {

    private inputHandler = new InputHandler();

    async run(): Promise<void> {
        const answer = await this.inputHandler.getInput("What is your name");
        console.log(`Welcome ${answer}!`);
    }

}