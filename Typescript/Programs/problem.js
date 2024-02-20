var sharesBought = 600;
var sharesPrice = 21.77;
var commisionToPay = (sharesBought * sharesPrice) + (sharesBought * sharesPrice * 0.02);
var totalAmountPaid = sharesBought * sharesPrice;
var commsionAmount = (sharesBought * sharesPrice * 0.02);
console.log("Total amount paid: " + totalAmountPaid);
console.log("Commission amount: " + commsionAmount);
console.log("Commission to pay: " + commisionToPay);
