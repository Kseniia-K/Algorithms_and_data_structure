// Найдите максимальный из всех внутренних узлов (не листьев) числового бинарного дерева.

class BinaryTree {
    constructor(rootObj){
        this.key = rootObj;
        this.leftChild = null;
        this.rightChild = null;
    }
}

let node = new BinaryTree(1);
node.leftChild = new BinaryTree(2);
node.rightChild = new BinaryTree(3);
node.leftChild.leftChild = new BinaryTree(4);
node.leftChild.rightChild = new BinaryTree(5);
node.rightChild.leftChild = new BinaryTree(6);
node.rightChild.rightChild = new BinaryTree(7);

function findMaxNode(node) {
    if (node === null || (node.leftChild === null && node.rightChild === null)) {
      return -Infinity;
    }
    
    let maxNode = node.key;
    
    if (node.leftChild !== null && node.rightChild !== null) {
      maxNode = Math.max(maxNode, findMaxNode(node.leftChild), findMaxNode(node.rightChild));
    }
    else if (node.leftChild !== null) {
      maxNode = Math.max(maxNode, findMaxNode(node.leftChild));
    }
    else {
      maxNode = Math.max(maxNode, findMaxNode(node.rightChild));
    }
    
    return maxNode;
}

console.log(findMaxNode(node));