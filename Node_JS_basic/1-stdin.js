/*eslint-disable*/
console.log("Welcome to Holberton School, what is your name?");

process.stdin.setEncoding("utf8");

process.stdin.on("data", (buff) => {
  const name = buff.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

process.stdin.on("end", () => {
  process.stdout.write("This important software is now closing\n");
});
