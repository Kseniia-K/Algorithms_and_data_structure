// class Stack {
//     constructor(){
//         this.stack=[];
//     }
//     push(item) {
//         this.stack.push(item);
//     }
//     pop() {
//         this.stack.pop();
//     }
//     peek() {
//         console.log(this.stack[this.stack.length - 1]);
//     }
//     reverse() {
//         for (let i = this.stack.length - 1; i >= 0; i--) {
//             console.log(this.stack[i]);
//         }
//     }
//     size() {
//         console.log(this.stack.length);
//     }
//     isEmpty() {
//         console.log(this.stack.length == 0);
//     }
//     show() {
//         console.log(this.stack)
//     }
// }
// let Stack1 = new Stack();

// Stack1.push("G");
// Stack1.push("o");
// Stack1.push("o");
// Stack1.push("d");
// Stack1.show();
// Stack1.reverse();
// Stack1.peek();
// Stack1.pop();
// Stack1.show();
// Stack1.size();
// Stack1.isEmpty();

// Дорешать!

// class Stack {
//     constructor(){
//         this.stack=[];
//     }
//     push(item) {
//         this.stack.push(item);
//     }
//     pop() {
//         this.stack.pop();
//     }
//     peek() {
//         return this.stack[this.stack.length - 1];
//     }
//     size() {
//         return this.stack.length;
//     }
//     isEmpty() {
//         return this.stack.length == 0;
//     }
//     show() {
//         console.log(this.stack);
//     }
// }

// let Stack1 = new Stack();
// Stack1.push(1);
// Stack1.push("a");
// Stack1.push("b");
// Stack1.push(1);
// Stack1.push("c");
// // Stack1.show();
// console.log(Stack1);

// let Stack2 = new Stack();
// for (let i = 0; i < Stack1.size(); i++) {
//     if(Stack1.peek() != 1) {
//         Stack1.push(Stack1.pop());
//     }
// }

// console.log(Stack1);

// 2

class Stack {
    constructor(){
        this.stack=[];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        this.stack.pop();
    }
    peek() {
        console.log(this.stack[this.stack.length - 1]);
    }
    reverse() {
        for (let i = this.stack.length - 1; i >= 0; i--) {
            console.log(this.stack[i]);
        }
    }
    size() {
        console.log(this.stack.length);
    }
    isEmpty() {
        console.log(this.stack.length == 0);
    }
    show() {
        console.log(this.stack)
    }
}
let Stack1 = new Stack();
Stack1.push("(");
Stack1.push("[");
Stack1.push("]");
Stack1.push(")");

console.log(Stack1);
Stack1.peek();