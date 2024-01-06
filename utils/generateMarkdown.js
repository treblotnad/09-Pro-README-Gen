//returns badge md string to add to markdown file, returns empty string if none selected
function renderLicenseBadge(license) {
  const badgeObj = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    Apache:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    None: "",
  };
  return badgeObj[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") return "";
  return "- [License](#license)";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") return "";
  return `## License
  This project is licensed under the ${license} License - see the License file for details.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const liceBadge = renderLicenseBadge(data.license);
  const liceLink = renderLicenseLink(data.license);
  const liceSect = renderLicenseSection(data.license);
  return `# ${data.title}
  ${liceBadge}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${liceLink}

  ## Installation
${data.install}
  ## Usage
${data.usage}
  ## Credits
${data.credit}
  ## Contributing
${data.contributing}
  ## Tests
${data.tests}
  ## Questions
Please contact me at [${data.email}](mailto:${data.email}?subject=${data.title}%20Question) or [${data.gitHubName}](github.com/${data.gitHubName}) with any questions!
  ${liceSect}
  `;
}

module.exports = generateMarkdown;
