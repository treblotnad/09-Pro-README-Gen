//required packages to run
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//array of questions asked by inquirer8.2.4
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
    message: "Please enter credit information",
    name: "credit",
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
//function writes .md file to output folder
function writeToFile(fileName, data) {
  fs.writeFile("./output/" + fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

//function that initializes app
function init() {
  inquirer.prompt(questions).then((response) => {
    // recordAnswers(response);
    const markDown = generateMarkdown(response);
    writeToFile("testReadMe.md", markDown);
  });
}

//Initialization function call
init();
