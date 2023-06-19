// // let myTree = ['a',
// //              ['b', ['d', [], []], ['e', [], []]],
// //              ['c', ['f', [], []], []]
// //              ]

// // let leftSubtree = myTree[1];
// // let root = myTree[0];
// // let rightSubtree = myTree[2];
// // // console.log(myTree);
// // // console.log(leftSubtree);
// // // console.log(root);
// // // console.log(rightSubtree);
// // console.log(leftSubtree[2][0]);


// // доделать

// class BinaryTree {
//     constructor(rootObj){
//         this.key = rootObj;
//         this.leftChild = null;
//         this.rightChild = null;
//     }
//     insertLeft(newNode){
//         if (this.leftChild == null){
//             this.leftChild = BinaryTree(newNode);
//         }
//         else {
//             t = BinaryTree(newNode);
//             t.leftChild = this.leftChild;
//             this.leftChild = t;
//         }
//     }
//     insertRight(){
//         if (this.rightChild == null){
//             this.rightChild = BinaryTree(newNode);
//         }
//         else {
//             t = BinaryTree(newNode);
//             t.rightChild = this.rightChild;
//             this.rightChild = t;
//         }
//     }
//     getLeftChild(){
//         return this.leftChild;
//     }
//     getRightChild(){
//         return this.rightChild;
//     }
//     getRootVal(){
//         return this.key;
//     }
//     setRootVal(obj){
//         this.key = obj;
//     }
// }

// let a = new BinaryTree('a');
// a.leftChild = new BinaryTree('b');
// a.rightChild = new BinaryTree('c');
// a.leftChild.leftChild = new BinaryTree('d');
// a.leftChild.rightChild = new BinaryTree('e');
// a.rightChild.leftChild = new BinaryTree('f');

// // console.log(a.leftChild.rightChild.key);

// // доделать

// // let r = new BinaryTree('a');
// // r.insertLeft('b');
// // r.insertRight('c');
// // r.getLeftChild().insertLeft('d');
// // r.getLeftChild().insertRight('e');
// // r.getRightChild().insertLeft('f');
// // r.getRightChild().insertRight('g');

// // console.log(r);

// // прямой обход

// function preorder(tree){
//     if (tree) {
//         console.log(tree.getRootVal());
//         preorder(tree.getLeftChild());
//         preorder(tree.getRightChild());
//     }
// }

// // симметричный обход

// function inorder(tree){
//     if (tree) {
//         inorder(tree.getLeftChild());
//         console.log(tree.getRootVal());
//         inorder(tree.getRightChild());
//     }
// }

// // обратный обход

// function postorder(tree){
//     if (tree){
//         postorder(tree.getLeftChild());
//         postorder(tree.getRightChild());
//         console.log(tree.getRootVal());
//     }
// }

// let book = new BinaryTree('Моя книга');
// book.leftChild = new BinaryTree('Глава 1');
// book.rightChild = new BinaryTree('Глава 2');
// book.leftChild.leftChild = new BinaryTree('Раздел 1.1');
// book.leftChild.rightChild = new BinaryTree('Раздел 1.2');
// book.rightChild.leftChild = new BinaryTree('Раздел 2.2');
// book.leftChild.rightChild.leftChild = new BinaryTree('Подраздел 1.2.1');
// book.rightChild.leftChild.leftChild = new BinaryTree('Подраздел 2.2.1');
// book.rightChild.leftChild.rightChild = new BinaryTree('Подраздел 2.2.2');

// // оглавление
// // preorder(book);

// // всё в главе 2
// // preorder(book.getRightChild());

// // кол-во заголовков (всех узлов)

// function count(tree){
//     if (!tree){
//         return 0;
//     }
//     return 1 + count(tree.getLeftChild()) + count(tree.getRightChild());
// }
// // console.log(count(book));

// // кол-во узлов в слое

// function leavesCount(tree){
//     if (tree){
//         if ((tree.getRightChild() == null) && (tree.getLeftChild() == null)){
//             return 1;
//         }
//         else {
//             return leavesCount(tree.getRightChild()) + leavesCount(tree.getLeftChild());
//         }
//     }
//     else {
//         return 0;
//     }
// }

// // console.log(leavesCount(book));

// // кол-во узлов на каждом уровне

// function nodesLayersCount(tree, k){
//     if (!tree){
//         return 0;
//     }
//     if (k == 0){
//         return 1;
//     }
//     else if (k > 0){
//         return nodesLayersCount(tree.getLeftChild(), k-1) + nodesLayersCount(tree.getRightChild(), k-1);
//     }
// }

// // console.log(nodesLayersCount(book, 1));


// // Определить по значению элемента
// // количество узлов в дереве, равных
// // этому элементу

// let dig = new BinaryTree(1);
// dig.leftChild = new BinaryTree(0);
// dig.rightChild = new BinaryTree(2);
// dig.leftChild.leftChild = new BinaryTree(6);
// dig.leftChild.rightChild = new BinaryTree(7);
// dig.rightChild.leftChild = new BinaryTree(4);
// dig.leftChild.rightChild.leftChild = new BinaryTree(11);
// dig.rightChild.leftChild.leftChild = new BinaryTree(8);
// dig.rightChild.leftChild.rightChild = new BinaryTree(5);

// function countDig(tree, d){
//     let cnt = 0;
//     if (!tree){
//         return "not a tree";
//     }
//     if (tree.getRootVal() == d){
//         ++cnt;
//     }
//     if () {
        
//     }
//     return 1 + count(tree.getLeftChild()) + count(tree.getRightChild());
// }
// let d = 2;
// console.log(countDig(dig, d));

// // function countDig(tree, d){
// //     let cnt = 0;
// //     if (!tree){
// //         return 0;
// //     }
// //     if (d == tree.getRootVal()){
// //         ++cnt;
// //         if (!tree){
// //             return cnt;
// //         }
// //         else if (d == tree.getLeftChild()){
// //             ++cnt;
// //             countDig(d == tree.getLeftChild());
// //             return cnt;
// //         }
// //     }
// //     // return 1 + countDig(tree.getLeftChild()) + countDig(tree.getRightChild());
// // }

// // console.log(countDig(dig, 0));


// // function findMaxNode(node){
// //     if(node.leftChild == null && node.rightChild == null){
// //         return node.key;
// //     }
// //     let leftMax = findMaxNode(node.leftChild);
// //     let rightMax = findMaxNode(node.rightChild);
// //     let maxNode = Math.max(leftMax, rightMax);

// //     return maxNode;
// // }

// // console.log(findMaxNode(node));