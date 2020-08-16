const inquirer = require("inquirer");

class Intern {

    internInfo() {
        inquirer.prompt([
            {
                type: 'input', 
                name: 'school',
                message: 'What is the Intern\'s school name?'
            }
        ]).then (reply => {     
            console.log(reply.school);
            })
    }

}

module.exports = Intern;