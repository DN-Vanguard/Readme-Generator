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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
