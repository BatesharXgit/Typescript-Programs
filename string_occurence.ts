import *as promptSync from 'prompt-sync';
const prompt = promptSync();

let string:string = prompt("Enter string: "); 
let str:string = prompt("Enter string: ");
let count:number = 0;


function countOccurrence(){
    for (let i = 0; i < string.length; i++){
        if (string[i] == str)
        {
            count += 1;
        }
    }
    console.log(count);
}

countOccurrence();