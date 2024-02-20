import *as promptSync from 'prompt-sync';
const prompt = promptSync();

//by default currency is inr
let amount:number = parseInt(prompt("Enter the amount"));
let currency:string = prompt("Enter the currency");
let conversionRate:number = parseInt(prompt("Enter the conversion rate"));
let convertedAmount:number = 0;

function converter(){
    if (currency == "usd"){
        conversionRate = 84;
        convertedAmount = amount * conversionRate;
        console.log(convertedAmount);
    }
    else if (currency == "eur"){
        conversionRate = 90;
        convertedAmount = amount *conversionRate;
        console.log(convertedAmount);
    }
    else if (currency == "gbp"){
        conversionRate = 105;
        convertedAmount = amount * conversionRate;
        console.log(convertedAmount);
    }
    else{
        console.log("Please enter a valid currency");
    }
}
converter();