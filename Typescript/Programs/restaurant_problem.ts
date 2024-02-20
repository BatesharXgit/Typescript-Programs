export {};

let mealCost:number=44.50;
let taxOnMeal:number= mealCost * 0.0675;
let tipOnMeal:number=0.15;

let mealCostWithTax:number = mealCost + taxOnMeal;
let taxAmountOnMeal:number = mealCostWithTax - mealCost;
let tipAmountOnMeal:number = tipOnMeal * (mealCost + taxAmountOnMeal);
let totalBill:number = tipAmountOnMeal + mealCostWithTax;

console.log("Meal cost: " + mealCost);
console.log("Tax on meal: " + taxAmountOnMeal);
console.log("Tip on meal: " + tipAmountOnMeal);
console.log("Total bill: " + totalBill);
