module.exports = [
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