// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const colors = require('colors');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: function(title){
            if (title != ''){
                return true;
            } else {
                console.log('ERROR: BLANK ENTRY, RETRY!'.underline.red)
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'what',
        message: 'What was your motivation? Why did you build this project?',
        validate: function(what){
            if (what != ''){
                return true;
            } else {
                console.log('ERROR: BLANK ENTRY, RETRY!.underline.red')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'What problem does it solve?',
        validate: function(why){
            if (why != ''){
                return true;
            } else {
                console.log('ERROR: BLANK ENTRY, RETRY')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'how',
        message: 'What did you learn?',
        validate: function(how){
            if (how != ''){
                return true;
            } else {
                console.log('ERROR: BLANK ENTRY, RETRY')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        validate: function(install){
            if (install != ''){
                return true;
            } else {
                console.log('ERROR: BLANK ENTRY, RETRY')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
        validate: function(usage){
            if (usage != ''){
                return true;
            } else {
                console.log('ERROR: BLANK ENTRY, RETRY')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using for this project?',
        choices: ['MIT', 'Apache', 'AGPL', 'no license']
    },
    {
        type: 'input',
        name: 'contri',
        message: 'How would you like other developers to contribute to this project?',
        validate: function(contri){
            if (contri != ''){
                return true;
            } else {
                console.log('ERROR: BLANK ENTRY, RETRY')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How would you like to test your application?',
        validate: function(tests){
            if (tests != ''){
                return true;
            } else {
                console.log('ERROR: BLANK ENTRY, RETRY')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitUser',
        message: 'What is your Github username?',
        validate: function(gitUser){
            if (gitUser != ''){
                return true;
            } else {
                console.log('ERROR: BLANK ENTRY, RETRY')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function(email){
            if (email != ''){
                return true;
            } else {
                console.log('ERROR: BLANK ENTRY, RETRY')
                return false;
            }
        }
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(inqData => {
        return inqData;
    })
}

// Function call to initialize app
init()
    .then(inqData => {
        return generateMarkdown(inqData)
    })
    .then(genReadme => {
        return writeToFile("./generated/README.md", genReadme)
    })
