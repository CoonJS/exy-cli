module.exports = [
  {
    type : 'list',
    name: 'template',
    choices: [
      { name: 'React', value: 'react' },
      { name: 'Vue', value: 'vue' }
    ],
    message : 'Choose app template'
  },
  {
    type : 'input',
    name : 'name',
    message : 'Enter project name ...',
    default: 'my-app'
  },
  {
    type : 'input',
    name : 'description',
    message : 'Description ...'
  },
  {
    type : 'input',
    name : 'version',
    message : 'Version',
    default: '1.0.0'
  },
  {
    type : 'input',
    name : 'author',
    message : 'Author'
  }
];
