const templates = require('./config').templates;

module.exports = [
  {
    type: 'input',

    name: 'template',
    message: `Choose project template: one of [ ${templates.join(' , ')} ]`,
    default: 'ReactApp',
    validate: value => templates.includes(value)
  },
  {
    type: 'input',
    name: 'name',
    message: 'Enter project name ...',
    default: 'my-app'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description ...'
  },
  {
    type: 'input',
    name: 'version',
    message: 'Version',
    default: '1.0.0'
  },
  {
    type: 'input',
    name: 'author',
    message: 'Author'
  }
  // {
  //   type : 'list',
  //   name: 'store',
  //   choices: [
  //     { name: 'Redux', value: 'redux' },
  //     { name: 'MobX', value: 'mobx' },
  //     { name: 'No store', value: null }
  //   ],
  //   message : 'Use store ?'
  // }
];
