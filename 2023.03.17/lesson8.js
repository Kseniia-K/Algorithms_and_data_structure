// class Stack {
//     constructor(){
//         this.stack = [];
//     }
//     push(item){
//         return this.stack.push(item);
//     }
//     pop(){
//         return this.stack.pop();
//     }
//     peek(){
//         return this.stack[this.stack.length - 1];
//     }
//     isEmpty(){
//         if (this.stack.length == 0) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     size(){
//         return this.stack.length;
//     }
//     reverse(){
//         return this.stack.reverse();
//     }
//     show(){
//         return this.stack;
//     }
// }

// let stack = new Stack();
// console.log(stack.isEmpty());
// stack.push("O");
// stack.push("n");
// stack.push("e");
// console.log(stack.show());
// stack.pop();
// console.log(stack.isEmpty());
// console.log(stack.size());
// console.log(stack.peek());
// console.log(stack.show());
// console.log(stack.reverse());