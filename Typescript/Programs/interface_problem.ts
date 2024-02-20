interface Card{
    cardSize:number;
    gradient?:string;
    readonly cardPhoneNo:number;

    getDetails():void;
}

let card_obj1:Card = {
    cardSize:98765432,
    cardPhoneNo:774539483583,

    getDetails(): void{
        console.log("The card size is: ",this.cardSize);
        console.log("The gradient is: ",this.gradient);
        console.log("The card phone number is: ",this.cardPhoneNo);
    }
}

let card_obj2:Card = {
    cardSize:8473847,
    cardPhoneNo:23939284737,

    getDetails(): void{
        console.log("The card size is: ",this.cardSize);
        console.log("The gradient is: ",this.gradient);
        console.log("The card phone number is: ",this.cardPhoneNo);
    }
}

console.log("The details of the card 1 is: \n");
card_obj1.getDetails();
console.log("The details of the card 2 is: \n");
card_obj2.getDetails();