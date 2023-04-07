// class Node {
//     constructor(data, next=null) {
//         this.data = data
//         this.next = next
//     }
// }

// let ari = new Node('Ari');
// let malcolm = new Node('Malcolm', ari);
// let pete = new Node('Pete', malcolm);
// let ricky = new Node('Ricky', pete);
// let sean = new Node('Sean', ricky);

// class Node {
//     constructor(data, next=null) {
//         this.data = data
//         this.next = next
//     }
// }

// function iterate(start) {
//     while(start != null) {
//         console.log(start.data);
//         start = start.next;
//     }
// }

// let head = new Node('Head');
// let node2 = new Node('Node2', head);
// let node3 = new Node('Node3', node2);
// let tail = new Node('Tail', node3);

// iterate(tail);

// let tail = new Node('Tail');
// let node3 = new Node('Node3', tail);
// let node2 = new Node('Node2', node3);
// let head = new Node('Head', node2);

// iterate(head);

class Node {
    constructor(data, next=null) {
        this.data = data
        this.next = next
    }
}
class SinglyLinkedList{
    // constructor() {
    //     this.head = null
    //     this.length = 0
    //     this.tail= null
    // }
    // insert(data, head){
    //     this.head = new Node(data, this.head)
    //     this.length += 1
    // }
    constructor(data, head) {
        this.head = new Node(data, this.head)
        this.length += 1
    }
}

let tail = new Node('Tail');
let node3 = new Node('Node3', tail);
let node2 = new Node('Node2', node3);
let head = new Node('Head', node2);
let newNode = new SinglyLinkedList('New node', head);
// let newNode = new SinglyLinkedList();
// newNode.insert("New node", head);


function iterate(start) {
    while(start != null) {
        console.log(start.data);
        start = start.next;
    }
}

iterate(newNode);