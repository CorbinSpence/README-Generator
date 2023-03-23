const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the project's title?"
    },
    {
        type: "input",
        name: "description",
        message: "Type a description for the project."
    },
    {
        type: "input",
        name: "installation",
        message: "Explain what you should install and how to install it."
    },
    {
        type: "input",
        name: "usage",
        message: "Explain how you should use this program?"
    },
    {
        type: "input",
        name: "contributing",
        message: "List out project contributor's"
    },
    {
        type: "input",
        name: "testing",
        message: "Explain how to test this program."
    },
    {
        type: "input",
        name: "license",
        message: "Choose you lisensing."
    },
    {
        type: "input",
        name: "github",
        message: "What is your github URL?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email."
    },
]).then(displayData(response))

var displayData = (response) => {

}