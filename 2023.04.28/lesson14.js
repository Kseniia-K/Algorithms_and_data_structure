// function merge(firstPart, secondPart){
//     let arrayResult = [];
//     while (firstPart.length && secondPart.length){
//         if (firstPart[0] < secondPart[0]){
//             arrayResult.push(firstPart.shift());
//         }
//         else {
//             arrayResult.push(secondPart.shift());
//         }
//     }
//     return [...arrayResult, ...firstPart, ...secondPart];
// }

// function mergeSort(array){
//     let halfArray = Math.floor(array.length / 2);
//     if (array.length < 2){
//         return array;
//     }
//     let firstPart = array.slice(0, halfArray);
//     let secondPart = array.slice(halfArray);
//     return merge(mergeSort(firstPart), mergeSort(secondPart));
// }

// let array = [12, 4, 41, 56, 8, 13, 90, 101, 32, 76, 3];
// console.log(mergeSort(array));


// function quickSort(array){
//     if (array.length < 2){
//         return array;
//     }
//     let pivot = array[0];
//     let firstPart= [];
//     let secondPart = [];
//     for (let i = 1; i < array.length; i++){
//         if (pivot > array[i]){
//             firstPart.push(array[i]);
//         }
//         else {
//             secondPart.push(array[i]);
//         }
//     }
//     return quickSort(firstPart).concat(pivot, quickSort(secondPart));
// }

// let array = [12, 4, 41, 56, 8, 13, 90, 101, 32, 76, 3];
// console.log(quickSort(array));