import *as promptSync from "prompt-sync";
const prompt = promptSync();

interface Brand {
    brandName:string;
    getDetails(brandName:string, modelNumber:string):string;
}

interface Model extends Brand {
    modelNumber:number;
}

class MyCar implements Model {
    brandName: string;
    modelNumber: number;

    getDetails(brandName:string, modelNumber:string) {
        this.brandName = brandName;
        this.modelNumber = parseInt(modelNumber);
        console.log("The car is ", this.brandName, "of model: ",this.modelNumber);
        return `${this.brandName} ${this.modelNumber}`;
    }
}

let myCar = new MyCar();   
let brandName = prompt("Enter the brand name: ");  
let modelNumber = prompt("Enter the model number: ");
console.log(myCar.getDetails(brandName, modelNumber));