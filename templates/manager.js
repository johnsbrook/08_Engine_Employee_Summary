const inquirer = require("inquirer");

class Manager {

    managerInfo() {
        // console.log("This is manager info.");
        inquirer.prompt([
            {
                type: 'input', 
                name: 'officeNumber',
                message: 'What is the manager\'s office number?'
            },
        ]).then (reply => {
     
            console.log(reply.officeNumber);
        })
    }

}

module.exports = Manager;