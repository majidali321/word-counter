#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blackBright.bold("\t\t\n Welcome to my Word Counter\n"));
console.log(chalk.bgCyan("=".repeat(50)));
let answer = await inquirer.prompt([
    {
        name: "solution",
        type: "input",
        message: "enter your sentence",
    }
]);
let word = (answer.solution.trim().split(" "));
console.log("=".repeat(50));
console.log("- Sentence word:");
console.log(word);
console.log(`word count ${word.length}`);
console.log("=".repeat(50));
