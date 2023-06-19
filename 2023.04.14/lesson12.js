// #1

// class Node {
//     constructor(data, next=null) {
//         this.data = data;
//         this.next = next;
//     }
// }
// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.listSize = 0;
//     }
    
//     // вставить узел в голову
//     insert(data) {
//         this.head = new Node(data, this.head);
//         if(!this.tail) {
//             this.tail = new Node(data, this.head);
//         }
//         this.listSize++;
//         return this;
//     }
//     // вставить узел в хвост
//     append(data) {
//         const node = new Node(data)
//         if (!this.head || !this.tail) {
//             this.head = node;
//             this.tail = node;

//             this.listSize++;
//             return this;
//         }
//         else {
//             this.tail.next = node;
//             this.tail = node;

//             this.listSize++;
//             return this;
//         }
//     }
//     // удалить узел из головы
//     remove() {
//         if (this.head.next) {
//             this.head = this.head.next;
//           }
//           else {
//             this.head = null;
//           }
//         this.listSize--;
//     }
//     // удалить узел из хвоста
//     delete() {
//         let curNode = this.head;
//         while(curNode.next) {
//             if(!curNode.next.next) {
//                 curNode.next = null;
//             }
//             else {
//                 curNode = curNode.next;
//             }
//         }
//         this.listSize--;
//     }
//     iterate() {
//         let start = this.head;
        
//         while(start != null){
//             console.log(start.data);
//             start = start.next;
//         }
//     }
//     size() {
//         console.log(this.listSize);
//     }
// }

// let newNode = new SinglyLinkedList();
// newNode.append('первый');
// newNode.append('второй');
// newNode.insert('в голове');
// newNode.append('в хвосте');
// newNode.iterate();
// newNode.size();
// newNode.delete();
// newNode.remove();
// newNode.size();
// newNode.iterate();
// newNode.delete();
// newNode.remove();
// newNode.size();

// Ответ:
        // в голове
        // первый
        // второй
        // в хвосте
        // 4
        // 2
        // первый
        // второй
        // 0

// #2.1

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

// A
// let m = new Stack();
// m.push('x');
// m.push('y');
// m.pop();
// m.push('z');
// console.log(m.peek());

// Ответ: z (т.к. мы добавили x, добавили y, вытащили y, добавили z и потом посмотрели на элемент, находящийся сверху стека, т.е. z).

// B
// let m = new Stack();
// m.push('x');
// m.push('y');
// m.push('z');
// while (!m.isEmpty()){
//     m.pop();
//     m.pop();
// }
// console.log(m.stack);

// Ответ: [] – пустой стек, т.к. мы сначала добавили друг за другом x, y, z, а потом создали цикл, который вытаскивает элементы из стека до тех пор пока в нём не останется элементов, поэтому в итоге мы получаем пустой стек.

// #2.2

// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class Queue {
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size == 0;
//     }
//     // вставка в конец
//     enqueue(data){
//         const node = new Node(data);
//         if (this.head === null) {
//             this.head = node;
//         }
//         else {
//             let curNode = this.head;
//             while (curNode.next !== null) {
//                 curNode = curNode.next;
//             }
//             curNode.next = node;
//         }
//         this.size++;
//     }
//     // удаление в начале
//     dequeue(){
//         if (this.head.next) {
//             this.head = this.head.next;
//         } 
//         else {
//             this.head = null;
//         }
//         this.size--;
//         return this.head.data;
//     }
//     iterate(){
//         let start = this.head;
//         while(start != null){
//             console.log(start.data);
//             start = start.next;
//         } 
//     }
// }

// const q = new Queue();
// q.enqueue('hello');
// q.enqueue('dog');
// q.enqueue(3);
// q.dequeue();
// console.log(q);

// Ответ: после последнего шага первым в очереди будет 'dog', а после него 3, так как первым мы добавили 'hello', а затем первым его и удалили по принципу First in first out.
// Результат в консоли:
// Queue {
//   head: Node { data: 'dog', next: Node { data: 3, next: null } },
//   size: 2
// }


// #3

// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class Queue {
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size == 0;
//     }
//     // вставка в конец
//     enqueue(data){
//         const node = new Node(data);
//         if (this.head === null) {
//             this.head = node;
//         }
//         else {
//             let curNode = this.head;
//             while (curNode.next !== null) {
//                 curNode = curNode.next;
//             }
//             curNode.next = node;
//         }
//         this.size++;
//     }
//     // удаление в начале
//     dequeue(){
//         if (this.head.next) {
//             this.head = this.head.next;
//         } 
//         else {
//             this.head = null;
//         }
//         this.size--;
//         return this.head.data;
//     }
//     iterate(){
//         let start = this.head;
//         while(start != null){
//             console.log(start.data);
//             start = start.next;
//         } 
//     }
// }

// function lastChild(count, children) {
//     let q = new Queue();
//     for(let i = 0; i < children.length; i++) {
//         q.enqueue(children[i]);
//     }
//     for(let i = 1; i < count; i++) {
//         for(let i = 1; i < count; i++) {
//             const node = new Node(q.head.data);
//             let curNode = q.head;
//             while (curNode.next !== null) {
//                 curNode = curNode.next;
//             }
//             curNode.next = node;
//             q.dequeue();
//         }
//         q.dequeue();
//     }
//     return q.head.data;
// }

// let children = ["Петя", "Лена", "Гена", "Витя", "Саша"];
// let count = 4;

// console.log(lastChild(count, children));
