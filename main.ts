#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.magentaBright("\n\t\t\t\t\t *****TODO LIST***** \t\t\t\t\t\n"));

let todos = [];

let condition = true;

while (condition) {
  let todoQues = await inquirer.prompt([
    {
      name: "firstQues",
      type: "input",
      message: chalk.yellowBright("What would you like to add in your Todos?"),
    },

    {
      name: "secondQues",
      type: "confirm",
      message: chalk.yellowBright("Would you like to add more in your todos?"),
    }
  ]);

  todos.push(todoQues.firstQues);

  console.log(chalk.bold.greenBright("\nAdded in your todo list is: \n"));

  for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}. ${chalk.cyanBright(todos[i])}`);
  }
  console.log("");

  condition = todoQues.secondQues;
}

console.log(chalk.yellow("HAVE A NICE DAY!"));