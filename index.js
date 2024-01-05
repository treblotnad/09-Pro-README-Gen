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
    choices: ["MIT", "Apache", "ISC", "None"],
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
function writeToFile(fileName, data) {
  fs.writeFile("./output/" + fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// function recordAnswers(response) {
//   answers.push(response.title);
//   answers.push(response.license);
//   answers.push(response.description);
//   answers.push(response.install);
//   answers.push(response.usage);
//   answers.push(response.contributing);
//   answers.push(response.tests);
//   answers.push(response.gitHubName);
//   answers.push(response.email);
// }
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    // recordAnswers(response);
    const markDown = generateMarkdown(response);
    writeToFile("testReadMe.md", markDown);
  });
}

// Function call to initialize app
init();
