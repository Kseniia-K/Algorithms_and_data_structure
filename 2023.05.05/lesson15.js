// Сортировка Пузырьком

function bubbleSort(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length-i; j++){
            if (array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

// Сортировка Шелла

function shellSort(array){
    let gap = Math.floor(array.length / 2);
    while (gap > 0){
        for (let i = gap; i < array.length; i++){
            let j = i;
            let temp = array[i];
            while (j >= gap && array[j-gap] > temp) {
                array[j] = array[j-gap];
                j = j - gap;
            }
            array[j] = temp;
        }
        if (gap == 2) {
            gap = 1;
        } 
        else {
            gap = Math.floor(gap / 2);
        }
    }
    return array;
}

let smallArray = [];
for (let i = 0; i < 10000; i++) {
    smallArray.push(Math.floor(Math.random() * 10000));
}

let sortedSmallArray = shellSort(smallArray);
let unsortedSmallArray = shellSort(smallArray).reverse();

let bigArray = [];
for (let i = 0; i < 100000; i++) {
    bigArray.push(Math.floor(Math.random() * 100000));
}

let sortedBigArray = shellSort(bigArray);
let unsortedBigArray = shellSort(bigArray).reverse();

// Пузырёк лучший случай (10 000)

let start = performance.now();
bubbleSort(sortedSmallArray);
let end = performance.now();
let time = Math.round(end - start);
console.log(`Пузырёк лучший случай (10 000): ${time} ms`);

// Сортировка Шелла лучший случай (10 000)

start = performance.now();
shellSort(sortedSmallArray);
end = performance.now();
time = Math.round(end - start);
console.log(`Сортировка Шелла лучший случай (10 000): ${time} ms`);
console.log();

// Пузырёк лучший случай (100 000)

start = performance.now();
bubbleSort(sortedBigArray);
end = performance.now();
time = Math.round(end - start);
console.log(`Пузырёк лучший случай (100 000): ${time} ms`);

// Сортировка Шелла лучший случай (100 000)

start = performance.now();
shellSort(sortedBigArray);
end = performance.now();
time = Math.round(end - start);
console.log(`Сортировка Шелла лучший случай (100 000): ${time} ms`);
console.log();

// Пузырёк средний случай (10 000)

start = performance.now();
bubbleSort(smallArray);
end = performance.now();
time = Math.round(end - start);
console.log(`Пузырёк средний случай (10 000): ${time} ms`);

// Сортировка Шелла средний случай (10 000)

start = performance.now();
shellSort(smallArray);
end = performance.now();
time = Math.round(end - start);
console.log(`Сортировка Шелла средний случай (10 000): ${time} ms`);
console.log();

// Пузырёк средний случай (100 000)

start = performance.now();
bubbleSort(bigArray);
end = performance.now();
time = Math.round(end - start);
console.log(`Пузырёк средний случай (100 000): ${time} ms`);

// Сортировка Шелла средний случай (100 000)

start = performance.now();
shellSort(bigArray);
end = performance.now();
time = Math.round(end - start);
console.log(`Сортировка Шелла средний случай (100 000): ${time} ms`);
console.log();

// Пузырёк худший случай (10 000)

start = performance.now();
bubbleSort(unsortedSmallArray);
end = performance.now();
time = Math.round(end - start);
console.log(`Пузырёк худший случай (10 000): ${time} ms`);

// Сортировка Шелла худший случай (10 000)

start = performance.now();
shellSort(unsortedSmallArray);
end = performance.now();
time = Math.round(end - start);
console.log(`Сортировка Шелла худший случай (10 000): ${time} ms`);
console.log();

// Пузырёк худший случай (100 000)

start = performance.now();
bubbleSort(unsortedBigArray);
end = performance.now();
time = Math.round(end - start);
console.log(`Пузырёк худший случай (100 000): ${time} ms`);

// Сортировка Шелла худший случай (100 000)

start = performance.now();
shellSort(unsortedBigArray);
end = performance.now();
time = Math.round(end - start);
console.log(`Сортировка Шелла худший случай (100 000): ${time} ms`);