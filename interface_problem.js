var card_obj1 = {
    cardSize: 98765432,
    cardPhoneNo: 774539483583,
    getDetails: function () {
        console.log("The card size is: ", this.cardSize);
        console.log("The gradient is: ", this.gradient);
        console.log("The card phone number is: ", this.cardPhoneNo);
    }
};
var card_obj2 = {
    cardSize: 8473847,
    cardPhoneNo: 23939284737,
    getDetails: function () {
        console.log("The card size is: ", this.cardSize);
        console.log("The gradient is: ", this.gradient);
        console.log("The card phone number is: ", this.cardPhoneNo);
    }
};
console.log("The details of the card 1 is: ");
card_obj1.getDetails();
console.log("The details of the card 2 is: ");
card_obj2.getDetails();
