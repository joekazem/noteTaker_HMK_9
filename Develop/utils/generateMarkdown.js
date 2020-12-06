// function to generate markdown for README
function generateMarkdown(data) {
let badge = data.license
let badgeMarkdown = ""
switch (badge) {
  case "mit":
    badgeMarkdown = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}
  
  return `
  ${badgeMarkdown}
  # ${data.title}

## Description
${data.description}

## Table oof cont
 
   [Description](#Description)
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
## license

This repo is covered by the ${data.license} license
## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).



`;
}

module.exports = generateMarkdown;
