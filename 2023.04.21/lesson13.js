// дописать пузырёк

// function bubbleSort(array) {
//     for (let i = 0; i < array.length - 1; i++){
//         for (let j = 0; j < array.length -i-1; j++){
//             if (array[j] > array[j+1]){
//                 array[j] = array[j+]
//             }
//         }
//     }
// }

// доделать

// function insertionSort(array){
//     for (let i = 1; i < array.length; i++){
//         let temp = array[i];
//         let j = i-1;
//         while(j >=0 && temp < array[j]){
//             array[j+1] = array[j];
//             j -= 1;
//         }
//         array[j+1] = temp;
//         return array;
//     }
// }
// let array = [32, 15, 204, 5];
// console.log(insertionSort(array));


// доделать

// function selectionSort(array){
//     for (let i in array){
//         let min = i;
//         for(let j = i+1; j < array.length-1; j++){
//             if (array[j] < array[min]){
//                 min = j;
//             }
//         }
//         array[i] = array[min];
//         array[min] = array[i];
//         return array;
//     }
// }

// let array = [32, 15, 204, 5];
// console.log(selectionSort(array));


// function shakerSort(array){
//     for (let i = 1; i < array.length; i++){
//         for (let j = 0; j < array.length - i; j++){
//             if (array[j] > array[j+1]){
//                 array[j] = array[j+1];
//             }
//         }
//     }
//     return array;
// }

// let array = [32, 15, 204, 5, 10, 3, 100, 33, 9];
// console.log(bubbleSort(array));