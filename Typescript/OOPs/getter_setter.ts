import * as promptSync from 'prompt-sync';
const prompt = promptSync();

class Cars{
    public brand:string = 'Lamborghini';
    public model:string = "Urus";
    private number:number;

    public setDetails(srNumber:number): void {
        car.brand = prompt("Enter the brand: ");
        car.model = prompt("Enter the model: ");
        this.number = srNumber;
	}

    public getDetails() {
        console.log("The brand of the car is: ", this.brand);
        console.log("The model of the car is: ", this.model);
        return this.number;
    }

}
let srNumber = prompt("Enter the number: ");
const car = new Cars();
car.setDetails(srNumber);
console.log("The Sr. ni. of car is: ", car.getDetails(),);