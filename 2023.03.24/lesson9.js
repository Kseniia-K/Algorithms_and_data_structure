// В стеке лежат буквы и единички, нужно выкинуть единички,
// буквы должны остаться в изначальном порядке

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

// let Stack1 = new Stack();
// Stack1.push(1);
// Stack1.push("a");
// Stack1.push("b");
// Stack1.push(1);
// Stack1.push("c");
// Stack1.push(1);
// Stack1.push("d");
// // console.log(Stack1.show());
// // console.log(Stack1.show()[Stack1.size() - 1]);

// let Stack2 = new Stack();

// while (!Stack1.isEmpty()){
//     let i = 1;
//     if(Stack1.peek() == 1){
//         Stack1.pop();
//     }
//     else {
//         Stack2.push(Stack1.show()[Stack1.size() - i]);
//         Stack1.pop();
//     }
//     i++;
// }
// console.log(Stack1.show());
// console.log(Stack2.show().reverse());

// Вариант ниже работает частично – требуется доработка

// for (let i = 1; i < Stack1.size(); i++){
//     if(Stack1.peek() == 1){
//         Stack1.pop();
//     }
//     else {
//         Stack2.push(Stack1.show()[Stack1.size() - i]);
//         Stack1.pop();
//     }
// }
// console.log(Stack1.show());
// console.log(Stack2.show());


// #2
// Проверить правильность расстоновки скобок
// (()())(()) – true
// +1+1-1+1-1-1+1+1-1-1 = 0
// )( - false
// (() – false
// ()) – false

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
// let Stack1 = new Stack();
// Stack1.push("(");
// Stack1.push("[");
// Stack1.push("]");
// Stack1.push(")");
// Stack1.push(")");

// console.log(Stack1.show());

// let count1 =  0;
// let count2 =  0;

// for (let i = 0; i < Stack1.size(); i++){
//     if (Stack1.show()[i] == '('){
//         count1++;
//     }
//     if (Stack1.show()[i] == ')'){
//         count1--;
//     }
//     if (Stack1.show()[i] == '['){
//         count2++;
//     }
//     if (Stack1.show()[i] == ']'){
//         count2--;
//     }
// }
// if (count1 == 0 && count2 == 0){
//     console.log(true);
// }
// else {
//     console.log(false);
// }