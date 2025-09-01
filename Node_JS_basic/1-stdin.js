console.log('Welcome to Holberton School, what is your name?');

process.stdin.once('data', (buff) => {
  const name = buff.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);

  if (process.stdin.isTTY) {
    process.exit(0);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
