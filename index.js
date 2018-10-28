#!/usr/bin/env node

const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const program = require('commander');
const { prompt } = require('inquirer');
const questions = require('./questions');

clear();

console.log(
  chalk.green(
    figlet.textSync('EXY  CLI', { horizontalLayout: 'full' })
  )
);

program
  .version('0.0.1')
  .description('ESEX CLI');

program
  .command('init')
  .action(prompt(questions).then(answers => {
    console.log(answers);
  }));

program.parse(process.argv);