const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require("./src/template.js");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require('path');
const template = require('./src/template.js');

const newEmpData = [];

const promptManager = () => {
  return inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter your name.',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the employee ID.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the email address.',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter your office number.',
    },
  ])
  
  .then(answers => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    newEmpData.push(manager);
    promptMenu();
  })
};

  const promptMenu = () => {
    return inquirer.prompt([
    {
      type: "list",
      message: "Please select the option you would like to continue with:",
      name: "menu",
      choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team']
    }
  ])
  .then(userChoice => {
    switch(userChoice.menu){
      case "Add an Engineer":
        promptEngineer();
        break;
      case "Add an Intern":
        promptIntern();
        break;
      case "Finish building my team":
        createTeam();
        break;
      default:
        console.log(`Invalid Data`);
    }
  });
};

const promptEngineer = () => {
  console.log(`Add a New Engineer`);

  return inquirer
  .prompt ([
    {
    type: 'input',
    message: 'Enter the name of the engineer.',
    name: 'name',
    },

    {
      type: 'input',
      message: 'Enter the employee id of the engineer.',
      name: 'id',
    },

    {
      type: 'input',
      message: 'Enter the email address of the engineer.',
      name: 'email',
    },

    {
      type: 'input',
      message: 'Enter the GitHub username of the engineer.',
      name: 'githubUsername',
    },
])

.then(answers => {
  console.log(answers);
  const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubUsername);
  newEmpData.push(engineer);
  promptMenu();
})
};

const promptIntern = () => {
  console.log(`Add a New Intern`);

  return inquirer
  .prompt ([
    {
    type: 'input',
    message: 'Enter the name of the intern.',
    name: 'name',
    },

    {
      type: 'input',
      message: 'Enter the employee id of the intern.',
      name: 'id',
    },

    {
      type: 'input',
      message: 'Enter the email address of the intern.',
      name: 'email',
    },

    {
      type: 'input',
      message: 'Enter the school name for the intern.',
      name: 'school',
    },
])

.then(answers => {
  console.log(answers);
  const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
  newEmpData.push(intern);
  promptMenu();
})
};

promptManager();


const createTeam = () => {
  console.log("New employee", newEmpData)
  console.log("Finished building my team!");
  fs.writeFileSync("./dist/index.html", generateTeam(newEmpData), "UTF8");
}