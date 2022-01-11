const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username? (Required)',
      validate: userInput => {
        if (userInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false;
        }
    }},
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: userInput => {
        if (userInput) {
            return true;
        } else {
            console.log('Please enter your email address!');
            return false;
        }
    }},
    {
      type: 'input',
      name: 'title',
      message: "What is your project's name? (Required)",
      validate: userInput => {
        if (userInput) {
            return true;
        } else {
            console.log('Please enter the Project name!');
            return false;
        }
    }},
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      default: 'None'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies?',
      default: 'npm i'
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be run to run tests?',
      default: 'npm test'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What does the user need to know about contributing to the repo?'
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

function init() {
    inquirer.prompt(questions)
    .then(responses => writeToFile('./dist/readme.md', generateMarkdown(responses)))
    .catch(err => console.log('An error ocurred', err))
}

// Function call to initialize app
init();