console.log("Welcome to Holberton School, what is your name?")

process.stdin.on("data", (name) => {
    console.log("Your name is: " + name.toString().trim())
})

process.stdin.on("end", () => {
    console.log("This important software is now closing")
})
