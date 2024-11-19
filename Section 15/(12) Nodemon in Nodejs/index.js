const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.blue.inverse("Nodemon is very cool package"));

const result = validator.isEmail("google@google.com");
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));