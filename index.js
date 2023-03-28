const inquirer = require('inquirer')
const fs = require('fs')

var licenses = ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3.0", "None"]
var badges = {}

badges["MIT"] = 'https://img.shields.io/badge/license-MIT-yellowgreen'
badges["APACHE 2.0"] = 'https://img.shields.io/badge/license-Apache-blue'
badges["GPL 3.0"] = 'https://img.shields.io/badge/license-GPL%203.0-blue'
badges["BSD 3.0"] = 'https://img.shields.io/badge/license-BSD%203.0-yellowgreen'
badges["None"] = 'https://img.shields.io/badge/license-None-lightgrey'

async function runPrompt(){
await inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the project's title?:",
    },
    {
        type: "input",
        name: "description",
        message: "Type a description for the project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Explain what you should install and how to install it:",
    },
    {
        type: "input",
        name: "usage",
        message: "Explain how you should use this program:",
    },
    {
        type: "input",
        name: "contributing",
        message: "List out project contributor's:",
    },
    {
        type: "input",
        name: "testing",
        message: "Explain how to test this program:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose you lisensing:",
        choices: [...licenses],
    },
    {
        type: "input",
        name: "github",
        message: "What is your github URL?:",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?:",
    },
]).then((response)=>{
    console.log("starting data list")
    console.log(response.title)
    console.log(response.description)
    console.log(response.installation)
    console.log(response.usage)
    console.log(response.contributing)
    console.log(response.testing)
    console.log(response.license)
    console.log(response.github)
    console.log(response.email)
    let content = 
`# ${response.title}

![License](${badges[response.license]})

## Description

${response.description}

## Table of Contents

1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation

${response.installation}

## Usage

${response.usage}

## License

${response.license}

## Contributing

${response.contributing}

## Tests

${response.testing}

## Questions

Github: [profile](${response.github})

Email: ${response.email}
`;
    fs.writeFile('README.md', content, (err) => err? console.log('failure') : console.log('success'))
})
}

runPrompt()