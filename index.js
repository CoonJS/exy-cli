#!/usr/bin/env node

var fs = require('fs');
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const program = require('commander');
const { prompt } = require('inquirer');

clear();
console.log(
  chalk.green(
    figlet.textSync('Create React App', { horizontalLayout: 'full' })
  )
);

const questions = [
  {
    type : 'input',
    name : 'projectName',
    message : 'Enter project name ...'
  },
  {
    type : 'list',
    name: 'store',
    choices: [
      { name: 'Redux', value: 'redux' },
      { name: 'MobX', value: 'mobx' },
      { name: 'No store', value: null }
    ],
    message : 'Use store ?'
  }
];

program
  .version('0.0.1')
  .description('Create React App');

program
  .command('init')
  .action(prompt(questions).then(answers => {
    console.log(answers);
  }));

program.parse(process.argv);