// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache 2.0":
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case "GNU":
      return "[![License: GNU](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    default:
      return "";
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GNU":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    default:
      return "";
  }
}

// Renders a working link to the license chosen
function renderLinkedLicenseBadge(license) {
  switch(license) {
    case "No License":
      return "";
    default:
      return `${renderLicenseBadge(license)}${renderLicenseLink(license)} \n\n`;
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case "No License":
      return "";
    default:
      return `## License \n`+
        `Click the badge for more information about the license. \n\n`+
        `${renderLinkedLicenseBadge(license)}`;
  }
}

// Functions to generate markdown for README

function renderTitle(title) { // title
  return `# ${title} \n`;
}

function renderDescription(description) { // description
  return `## Description \n`+
    `${description} \n`;
}

function renderTableOfContents(license) { // table of contents
  let licenseTemplate;
  // If "no license" was selected, this section is excluded from the table of contents
  switch (license) {
    case "No License":
      licenseTemplate = "";
      break;
    default:
      licenseTemplate = `* [License](#license) \n`;
  }

  return `## Table of Contents \n`+
    `* [Installation](#installation) \n`+
    `* [Usage](#usage) \n`+
    licenseTemplate +
    `* [Contributing](#contributing) \n`+
    `* [Tests](#tests) \n`+
    `* [Questions](#questions) \n`;
}

function renderInstallation(install) { // installation
  return `## Installation \n`+
    `${install} \n`;
}

function renderUsage(usage) { // usage
  return `## Usage \n`+
    `${usage} \n`;
}

function renderContributing(contribute) { // contributions
  return `## Contributing \n`+
    `${contribute} \n`;
}

function renderTests(tests) { // tests
  return `## Tests \n`+
    `${tests} \n`;
}

function renderQuestions(username, email) { //github and email
  return `## Questions \n`+
    `${username} [GitHub Profile](https://github.com/${username}) \n\n`+
    `Feel free to email me at ${email} \n`;
}

function generateMarkdown(data) {
  return `${renderTitle(data.title)} \n`+
    `${renderLinkedLicenseBadge(data.license)}`+
    `${renderDescription(data.description)} \n`+
    `${renderTableOfContents(data.license)} \n`+
    `${renderInstallation(data.installation)} \n`+
    `${renderUsage(data.usage)} \n`+
    `${renderLicenseSection(data.license)}`+
    `${renderContributing(data.contribute)} \n`+
    `${renderTests(data.tests)} \n`+
    `${renderQuestions(data.username, data.email)}`;
}

module.exports = generateMarkdown;
