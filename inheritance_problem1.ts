import * as promptSync from "prompt-sync";
const prompt = promptSync();

class Parent {

    private m1() {
        console.log("Parent's private m1 function called");
    }

    private m2(a: number) {
        console.log(`Parent's private m2 function called with argument ${a}`);
    }

    public m1Public() {
        console.log("Parent's public m1Public function called");
        this.m1();
    }

    public m2Public(a: number) {
        console.log(`Parent's public m2Public function called with argument ${a}`);
        this.m2(a);
    }
}

class Child extends Parent{
    
    public m1Child(){
        console.log("Child's m1Child function called");
        this.m1Public();
    }

    public m2Child(b: number) {
        console.log(`Child's m2Child function called with argument ${b}`);
        this.m2Public(b);
    }
}

let parent = new Parent();
let child = new Child();

parent.m1Public();
parent.m2Public(5);

child.m1Child();
child.m2Child(10);

