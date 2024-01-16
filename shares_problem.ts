let sharesBought:number=600;
let sharesPrice:number=21.77;

let commisionToPay:number = (sharesBought * sharesPrice) + (sharesBought * sharesPrice * 0.02);
let totalAmountPaid:number = sharesBought * sharesPrice;
let commsionAmount:number = (sharesBought * sharesPrice * 0.02);

console.log("Total amount paid: " + totalAmountPaid);
console.log("Commission amount: " + commsionAmount);
console.log("Commission to pay: " + commisionToPay);

