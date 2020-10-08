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
    }
]
function generatefile(filename, data){
    return fs.writeFileSync(path.join(process.cwd(),filename),data)
}

function createmarkdown(answers){
    return `# ${answers.title}
## written by ${answers.author}
    `
}

inquirer.prompt(questions).then(answers =>{
    console.log(answers.title);
    generatefile("filename2.md", createmarkdown(answers))

})