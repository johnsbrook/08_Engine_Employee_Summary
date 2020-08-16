const inquirer = require("inquirer");

function employeeInfo() {
    return inquirer.prompt ([
        // Name of the Employee
        {
            type: "input",
            message: "What is the name of the employee?",
            name: "employee"
        },
        // Employee email
        {
            type: "input", 
            message: "What is the employee's email?", 
            name: "email"
        }, 
        // Employee role
        {
            type: "list",
            message: "What is the employee's role?", 
            name: "role"
        }
    ])
}   


// Generate Employee ID


// Function getName() 

// Function getEmail()

// Function getRole() to return emmployee