import * as promptSync from 'prompt-sync';
const prompt = promptSync();

class Employee{
    empName:string;
    empId:number;
    empDesignation:string;
    empSalary:number;

    getRank():void{
        if(this.empSalary > 100000){
            console.log("The employee is a senior");
        }
        else if(this.empSalary > 50000){
            console.log("The employee is a manager");
        }
        else{
            console.log("The employee is a junior");
        }
    }
    setDetails():void{
        employee.empName = prompt("Enter the name: ");
        employee.empId = parseInt(prompt("Enter the id: "));
        employee.empDesignation = prompt("Enter the designation: ");
        employee.empSalary = parseInt(prompt("Enter the salary: "));
    }
    getDetails():void{     
        console.log("The name of the employee is: ", this.empName);
        console.log("The id of the employee is: ", this.empId);
        console.log("The designation of the employee is: ", this.empDesignation);
        console.log("The salary of the employee is: ", this.empSalary);
    }
}

const employee = new Employee();
employee.setDetails();
employee.getDetails();
employee.getRank();

