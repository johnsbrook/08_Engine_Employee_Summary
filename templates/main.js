const inquirer = require("inquirer");
const Manager = require("./manager.js");
const Engineer = require("./engineer.js");
const Intern = require("./intern.js");


class Employee {



    employeeName() {

    const manager = new Manager();
    const engineer = new Engineer();
    const intern = new Intern();

        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the employee\'s name?'
            },
            {
                type: 'input', 
                name: 'email',
                message: 'What is the employee\'s email?'
            }, 
            {
                type: 'list',
                name: 'position',
                message: 'What is the employee\'s position?',
                choices: ["Manager", "Engineer", "Intern"]
            }
        ]).then (reply => {

            console.log(reply.name);
            console.log(reply.email);
            console.log(reply.position);

            if (reply.position === "Manager") {

                // This conditional will redirect you to manager.js set of questions
                console.log("This will redirect you to manager.js");
                manager.managerInfo();

            } else if (reply.position === "Engineer") {
                // This conditional will redirect you to engineer.js set of questions
                console.log("This will redirect you to engineer.js");
                engineer.engineerInfo();
            } else {
                // This conditional will redirect you to intern.js set of questions
                console.log("This will redirect you to intern.js");
                intern.internInfo();
            }
        })
    }
}

// Generate Employee ID

// Function getName() 

// Function getEmail()

// Function getRole() to return emmployee

module.exports = Employee;