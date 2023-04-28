// #1

// class Node {
//     constructor(data, next=null){
//         this.data = data
//         this.next = next
//     }
// }

// let ari = new Node('Ari');
// let malcolm = new Node('Malcolm', ari);
// let pete = new Node('Pete', malcolm);
// let ricky = new Node('Ricky', pete);
// let sean = new Node('Sean', ricky);

// #2

// class Node {
//     constructor(data, next=null){
//         this.data = data
//         this.next = next
//     }
// }

// function iterate(start) {
//     while(start != null){
//       console.log(start.data);
//       start = start.next;
//     }
// }

// Вывод с головы до хвоста

// let tail = new Node('Tail');
// let node3 = new Node('Node 3', tail);
// let node2 = new Node('Node 2', node3);
// let head = new Node('Head', node2);

// iterate(head);

// Вывод с хвоста до головы

// let head = new Node('Head');
// let node2 = new Node('Node 2', head);
// let node3 = new Node('Node 3', node2);
// let tail = new Node('Tail', node3);

// iterate(tail);

// #3

class Node {
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}
class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }
    
    insert(data) {
        this.head = new Node(data, this.head)
        if(!this.tail) {
            this.tail = new Node(data, this.head)
        }
        return this;
    }
    iterate(start) {
        while(start != null){
            console.log(start.data);
            start = start.next;
        }
    }
    // доделать append
    append(data) {
        if(!this.head || !this.tail) {
            this.head = new Node(data)
            this.tail = new Node(data)

            return this;
        }
        this.tail.next = new Node(data)
        this.tail = new Node(data)

        return this;
    }
}

let newNode = new SinglyLinkedList();
newNode.insert('Tail');
newNode.insert('New Node');
newNode.insert('Head');
// newNode.iterate(newNode.head);
newNode.append('Tail2');
newNode.append('Next Tail');
newNode.iterate(newNode.head);

// console.log(newNode.head.data);
// console.log(newNode.tail.data);

















// class Node {
//     constructor(data, next=null) {
//         this.data = data
//         this.next = next
//     }
// }
// class SinglyLinkedList{
//     // constructor() {
//     //     this.head = null
//     //     this.length = 0
//     //     this.tail= null
//     // }
//     // insert(data, head){
//     //     this.head = new Node(data, this.head)
//     //     this.length += 1
//     // }
//     constructor(data, head) {
//         this.head = new Node(data, this.head)
//         this.length += 1
//     }
// }

// let tail = new Node('Tail');
// let node3 = new Node('Node3', tail);
// let node2 = new Node('Node2', node3);
// let head = new Node('Head', node2);
// let newNode = new SinglyLinkedList('New node', head);
// // let newNode = new SinglyLinkedList();
// // newNode.insert("New node", head);


// function iterate(start) {
//     while(start != null) {
//         console.log(start.data);
//         start = start.next;
//     }
// }

// iterate(newNode);