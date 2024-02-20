import * as promptSync from "prompt-sync";
const prompt = promptSync(); //Creating object(prompt) of class promptSync for taking input.
class Employee {
  //Creating Employee class with data members(containing employees details).
  empId: number;
  empName: string;
  basicSalary: number;
  da: number;
  incomeTax: number;
  grossSalary: number;
  netSalary: number;
  getNetSalary(): void {
    //Member function to calculate net salary.
    this.grossSalary =
      this.basicSalary +
      this.basicSalary * this.da +
      this.basicSalary * this.incomeTax;
    this.netSalary = this.grossSalary - this.grossSalary * this.incomeTax;
    console.log("The net salary of the employee is: ", this.netSalary);
  }
  setDetails(): void {
    //Member function to take input(employee details) from user.
    console.log("\n");
    console.log("#######################################################");
    console.log("Enter the details of employee: ");
    this.empId = parseInt(prompt("Enter the id: "));
    this.empName = prompt("Enter the name: ");
    this.basicSalary = parseInt(prompt("Enter the basic salary: "));
    this.da = 0.52;
    this.incomeTax = 0.3;
    console.log("\n");
  }
  getDetails(): void {
    //Member function to print data(employee details).
    console.log("#######################################################");
    console.log("The details of the Employee is: ");
    console.log("The id of the employee is: ", this.empId);
    console.log("The name of the employee is: ", this.empName);
    console.log("The basic salary of the employee is: ", this.basicSalary);
    console.log("The da of the employee is: ", this.da);
    console.log("The income tax of the employee is: ", this.incomeTax);
    this.getNetSalary();
    console.log("#######################################################");
    console.log("\n");
  }
}
let employee1 = new Employee(); //Creating object(employee1) of class Employee.
let employee2 = new Employee(); //Creating object(employee2) of class Employee.
let employee3 = new Employee(); //Creating object(employee3) of class Employee.
employee1.setDetails(); //Calling member function setDetails of object(employee1).
employee2.setDetails(); //Calling member function setDetails of object(employee2).
employee3.setDetails(); //Calling member function setDetails of object(employee3).
employee1.getDetails(); //Calling member function getDetails of object(employee1).
employee2.getDetails(); //Calling member function getDetails of object(employee2).
employee3.getDetails(); //Calling member function getDetails of object(employee3).
