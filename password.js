const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let welcome = "Welcome to the most awesome password validator";

reader.question("Enter your password: ", function (input) {
  if (input.length >= 10) {
    console.log("password is perfect");
  } else {
    console.log("password does not meet requirements");
  }

  reader.close();
});
