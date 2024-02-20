import *as promptSync from 'prompt-sync';
const prompt = promptSync();

// let a:number=parseInt (prompt('Enter first number: '));
// let b:number=parseInt( prompt("Enter second number: "));
// let result:number = a + b ;

// console.log("Result: ", result);

let budgetPrice:number=parseInt(prompt('Enter budget price: '));
let offerOnBudgetPrice:number = 0;
let carCostToOwner:number = 0;

if (budgetPrice >= 400000 && budgetPrice < 600000){
    console.log("You can buy a Maruti car");
    offerOnBudgetPrice = budgetPrice * 0.12;
    console.log("Car Cost after discount", carCostToOwner = budgetPrice - offerOnBudgetPrice);
} 
else if (budgetPrice >= 600000  && budgetPrice < 700000)
{
    console.log("Car Cost after discount","You can buy a Ford car");
    offerOnBudgetPrice = budgetPrice * 0.13;
    console.log(carCostToOwner = budgetPrice - offerOnBudgetPrice);
}
else (budgetPrice >= 700000 && budgetPrice < 800000)
{
    console.log("Car Cost after discount","You can buy a Hyundai car");
    offerOnBudgetPrice = budgetPrice * 0.14;
    console.log(carCostToOwner = budgetPrice - offerOnBudgetPrice);
}
