const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHTML = require("./dist/index.html")

function getEmployee(){
    console.log ("Team info");
    inquirer
        .prompt([
        {
         type: "input",
         name: "EmployeeName",
         message:"Enter Employee Name",
         validate: answer => {
            if (answer === "") {
                console.log("Please enter a valid Employee Name");
                return false;
        }
        return true;
    }
},
{
    type: "number",
    name: "EmployeeId",
    Message: "Enter Employee Id",
    validate: answer => {
        if (answer < 0) {
            console.log("Please enter number higher than zero");
            return false;
        }
        return true;
    }
},
{
    type: "inpute",
    name: "EmployeeEmail",
    message: "Enter Employee Email",
    validate: answer => {
        if (answer === "") {
            console.log("Please enter a valid Employee Email");
            return false;
     }
     return true;
  }
},
{
    type: "inpute",
    Name: "EmployeeRole",
    mesaage: "Enter company Rol",
    validate: answer => {
        if (answer === "") {
            console.log("Please enter a valid Employee Email");
            return false;
     }
     return true;
    }
}]

