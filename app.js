const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputFile = path.join(OUTPUT_DIR, "team.html");
const validator = require("email-validator");

const team = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function start() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What's the employee ID?",
        name: "id",
      },
      {
        type: "list",
        message: "What's the employee's title?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then(function (r) {
      this.name = r.name;
      this.id = r.id;
      this.role = r.role;
    })
    .then(function () {
      email();
      function email() {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What's the employee's email?",
              name: "email",
            },
          ])
          .then(function (re) {
            this.email = re.email;

            if (validator.validate(this.email)) {
              this.email = re.email;

              if (this.role === "Manager") {
                inquirer
                  .prompt([
                    {
                      type: "input",
                      message: "What's the manager's office number?",
                      name: "officeNumber",
                    },
                  ])
                  .then(function (r2) {
                    this.officeNumber = r2.officeNumber;

                    console.log(this.name);
                    console.log(this.id);
                    console.log(this.email);
                    console.log(this.role);
                    console.log(this.officeNumber);

                    const manager = new Manager(
                      this.name,
                      this.id,
                      this.email,
                      this.officeNumber
                    );
                    console.log(manager);

                    team.push(manager);
                  })
                  .then(function () {
                    addMore();
                  });
              } else if (this.role === "Engineer") {
                inquirer
                  .prompt([
                    {
                      type: "input",
                      message: "What's the engineer's github username?",
                      name: "github",
                    },
                  ])
                  .then(function (r3) {
                    this.github = r3.github;

                    console.log(this.name);
                    console.log(this.id);
                    console.log(this.email);
                    console.log(this.role);
                    console.log(this.github);

                    const engineer = new Engineer(
                      this.name,
                      this.id,
                      this.email,
                      this.github
                    );
                    console.log(engineer);
                    team.push(engineer);
                  })
                  .then(function () {
                    addMore();
                  });
              } else {
                inquirer
                  .prompt([
                    {
                      type: "input",
                      message: "What's the Intern's school name?",
                      name: "school",
                    },
                  ])
                  .then(function (r2) {
                    this.school = r2.school;
                    console.log(this.school);

                    const school = new Intern(
                      this.name,
                      this.id,
                      this.email,
                      this.school
                    );
                    console.log(school);
                    team.push(school);
                  })
                  .then(function () {
                    addMore();
                  });
              }
            } else {
              console.log("Please, enter a valid email address.");
              email();
            }
          });
      }
    });
}

function addMore() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"],
        name: "continue",
      },
    ])
    .then(function (r) {
      if (r.continue === "Yes") {
        start();
      } else {
        buildTeamProfile();
        return "Your team will be: " + JSON.stringify(team);
      }
    });
}

function buildTeamProfile() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFile(outputFile, render(team), "utf8", function (error) {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Success!");
  });
}

start();
