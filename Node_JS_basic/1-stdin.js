console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (name) => {
  const input = name.toString();
  process.stdout.write(`Your name is: ${input}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
