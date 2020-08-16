const inquirer = require("inquirer");

class Engineer {

    engineerInfo() {
        inquirer.prompt([
            {
                type: 'input', 
                name: 'usernameGitHub',
                message: 'What is the Engineer\'s GitHub username?'
            }
        ]).then (reply => {
            console.log(`https://github.com/${reply.usernameGitHub}`);
            })
    }

}

module.exports = Engineer;