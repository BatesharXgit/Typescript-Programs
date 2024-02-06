"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getRank = function () {
        if (this.empSalary > 100000) {
            console.log("The employee is a senior");
        }
        else if (this.empSalary > 50000) {
            console.log("The employee is a manager");
        }
        else {
            console.log("The employee is a junior");
        }
    };
    Employee.prototype.setDetails = function () {
        employee.empName = prompt("Enter the name: ");
        employee.empId = parseInt(prompt("Enter the id: "));
        employee.empDesignation = prompt("Enter the designation: ");
        employee.empSalary = parseInt(prompt("Enter the salary: "));
    };
    Employee.prototype.getDetails = function () {
        console.log("The name of the employee is: ", this.empName);
        console.log("The id of the employee is: ", this.empId);
        console.log("The designation of the employee is: ", this.empDesignation);
        console.log("The salary of the employee is: ", this.empSalary);
    };
    return Employee;
}());
var employee = new Employee();
employee.setDetails();
employee.getDetails();
employee.getRank();
