//Madhu is tasked with developing a program to calculate the total price and discount for a list of discounted items. Create a 
//method called getDetails(). This method contains details about the name, item number, and price.
//A customer purchases n items. Write a program to display the item-wise bill and total amount. The program should also display 
//the total price of all items and the total discount amount.

import *as promptSync from 'prompt-sync';
const prompt = promptSync();

class Discount {
    name: string;
    itemNumber: number;
    price: number;

    constructor(name: string, itemNumber: number, price: number) {
        this.name = name;
        this.itemNumber = itemNumber;
        this.price = price;
    }

    getDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Item Number: ${this.itemNumber}`);
        console.log(`Price: ${this.price}`);
    }

    getTotalPrice(): number {
        return this.price;
    }

    getTotalDiscount(): number {
        return this.price * 0.1;
    }

    getTotalAmount(): number {
        return this.price - (this.price * 0.1);
    }
}

let discount1 = new Discount("A", 1, 500);
let discount2 = new Discount("B", 2, 200);
let discount3 = new Discount("Eraser", 3, 30);

discount1.getDetails();
console.log(`Total Price: ${discount1.getTotalPrice()}`);
console.log(`Total Discount: ${discount1.getTotalDiscount()}`);
console.log(`Total Amount: ${discount1.getTotalAmount()}`);

discount2.getDetails();
console.log(`Total Price: ${discount2.getTotalPrice()}`);
console.log(`Total Discount: ${discount2.getTotalDiscount()}`);
console.log(`Total Amount: ${discount2.getTotalAmount()}`);

