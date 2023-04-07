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
    reverse() {
        for (let i = this.stack.length - 1; i >= 0; i--) {
            console.log(this.stack[i]);
        }
    }
    show() {
        console.log(this.stack)
    }
}
let Stack1 = new Stack();

Stack1.push("G");
Stack1.push("o");
Stack1.push("o");
Stack1.push("d");
Stack1.show();
Stack1.reverse();
Stack1.pop();
Stack1.show();