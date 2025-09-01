/* eslint jest/require-hook: "off" */

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (name) => {
  process.stdout.write(`Your name is: ${name.toString().trim()}\n`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
