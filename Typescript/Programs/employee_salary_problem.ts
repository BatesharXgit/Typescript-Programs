import *as promptSync from 'prompt-sync';
const prompt = promptSync();

let salary:number = parseInt(prompt("Enter your salary: "));

if(salary <= 20000){
    console.log("Sales Department.");
}
else if(salary > 20000 && salary <= 50000){
    console.log("Marketing Department.");
}
else if(salary > 50000 && salary <= 70000){
    console.log("Production Department.");
}
else if(salary > 70000 && salary <= 100000){
    console.log("Development Department.");
}
else{
    console.log("Are you CEO.");
}