import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? \n > ', (answer) => {
	console.log(`Welcome ${answer}!`);
	rl.close();

});
