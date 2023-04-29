// function bubbleSort(array){
//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; j < array.length-i; j++){
//             if (array[j] > array[j+1]){
//                 let temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//             }
//         }
//     }
//     return array;
// }

// let array = [12, 4, 41, 56, 8, 13, 90, 101, 32, 76, 3];
// console.log(bubbleSort(array));


// function insertionSort(array){
//     for (let i = 1; i < array.length; i++){
//         let temp = array[i];
//         j = i-1;
//         while (j>=0 && temp < array[j]){
//             array[j+1] = array[j];
//             j -= 1;
//         }
//         array[j+1] = temp;
//     }
//     return array;
// }

// let array = [12, 4, 41, 56, 8, 13, 90, 101, 32, 76, 3];
// console.log(insertionSort(array));


// function selectionSort(array){
//     for (let i = 0; i < array.length; i++){
//         let min = i;
//         for (let j = i+1; j < array.length; j++){
//             if (array[j] < array[min]){
//                 min = j;
//             }
//         }
//         let temp = array[i];
//         array[i] = array[min];
//         array[min] = temp;
//     }
//     return array;
// }

// let array = [12, 4, 41, 56, 8, 13, 90, 101, 32, 76, 3];
// console.log(selectionSort(array));


// function shakerSort(array){
//     let changer = true;
//     while (changer){
//         for (let i = 0; i < array.length; i++){
//             if (array[i] > array[i+1]){
//                 let temp = array[i];
//                 array[i] = array[i+1];
//                 array[i+1] = temp;
//                 changer = true;
//             }
//         }
//         if (!changer)
//         break;
//         changer = false;
//         for (let j = array.length - 1; j >= 0; j--){
//             if (array[j] < array[j-1]){
//                 let temp = array[j];
//                 array[j] = array[j-1];
//                 array[j-1] = temp;
//                 changer = true;
//             }
//         }
//     }
//     return array;
// }

// let array = [12, 4, 41, 56, 8, 13, 90, 101, 32, 76, 3];
// console.log(shakerSort(array));


// function shellSort(array){
//     let gap = Math.floor(array.length / 2);
//     while (gap > 0){
//         for (let i = gap; i < array.length; i++){
//             let j = i;
//             let temp = array[i];
//             while (j >= gap && array[j-gap] > temp) {
//                 array[j] = array[j-gap];
//                 j = j - gap;
//             }
//             array[j] = temp;
//         }
//         if (gap == 2) {
//             gap = 1;
//         } 
//         else {
//             gap = Math.floor(gap / 2);
//         }
//     }
//     return array;
// }

// let array = [12, 4, 41, 56, 8, 13, 90, 101, 32, 76, 3];
// console.log(shellSort(array));