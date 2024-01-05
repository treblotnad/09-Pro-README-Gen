// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the project's title?",
    name: "title",
  },
  {
    type: "list",
    message: "Which license?",
    name: "license",
    choices: ["MIT", "Apache", "ISC"],
  },
  {
    type: "input",
    message: "Please describe the project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter installation instructions",
    name: "install",
  },
  {
    type: "input",
    message: "Please enter usage information",
    name: "usage",
  },
  {
    type: "input",
    message: "Please enter contribution guidelines",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please enter test instructions",
    name: "tests",
  },
  {
    type: "input",
    message: "Please enter GitHub username",
    name: "gitHubName",
  },
  {
    type: "input",
    message: "Please enter email address",
    name: "email",
  },
];
const answers = [];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log("README");
  });
}

// Function call to initialize app
init();
