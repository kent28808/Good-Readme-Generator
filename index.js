const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const questions = [
    {
        name: "title",
        type: "input",
        message: "Whats the title of your project",
    },
    {
        name: "author",
        type: "input",
        message: "Who's the author of your project?",
    },
    {
        name: "license",
        type: "list",
        choices: ["MIT", "Apache", "GNUGPLV3"],
        message: "Which license is preferred?",
    },
    {
        name: "description",
        type: "input",
        message: "What is the description of your project?",
    },
    {
        name: "installation",
        type: "input",
        message: "How do you install this application?",
    },
    {
        name: "usage",
        type: "input",
        message: "How do you use this application?",
    },
    {
        name: "test",
        type: "input",
        message: "How do you test this application?",
    },
    {
        name: "questions",
        type: "input",
        message: "How do you respond to questions?",
    },
    //{
        //name: "author",
        //type: "input",
        //message: "Who's the author of your project?",
   // }
]
function generatefile(filename, data){
    return fs.writeFileSync(path.join(process.cwd(),filename),data)
}

function createmarkdown(answers){
    return `# ${answers.title}
![license](https://img.shields.io/badge/license-${answers.license}-blue.svg) 

## Description

${answers.description}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Installation

\`\`\`
${answers.installation}
\`\`\`

## Usage 

${answers.usage}

## Contributions

This project was written by: ${answers.author}.
If you want to contribute to this project review the open issues and open a PR.
   
## License

${answers.license}

## Tests

\`\`\`
${answers.test}
\`\`\`

## Questions

${answers.questions}


`
}

inquirer.prompt(questions).then(answers =>{
    //console.log(answers.title);
    generatefile("filename2.md", createmarkdown(answers))

})