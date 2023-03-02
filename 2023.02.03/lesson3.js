// Дан массив из нечетных и четных чисел. 
// Сначала идут нечетные, потом четные. 
// Найти, с какого индекса начинаются четные числа в массиве. 
// (Input: [5,17,11,9,12,8,16,10,300]. Output: 4)
// Oцените вычислительную сложность.
// Решать задачу нужно, используя бинарный поиск.

function binar(array){
    let right = array.length - 1;
    let left = 0;
    let is;

    while (left <= right){
        let mid = Math.floor((right - left) / 2) + left;
        if (array[mid] % 2 != 0){
            left = mid + 1;
            right++;
            if ((left == array[array.length - 1]) && (array[array.length - 1] % 2 == 0)){
                is = true;
                if(is){
                    return array.length - 1;
                }
            }
            if((left == array[array.length - 1]) && (array[array.length - 1] % 2 != 0)){
                is = false;
                if(!is){
                    return "В массиве нет чётных чисел!";
                }
            }
        }
        else if ((array[mid] % 2 == 0) && (array[mid - 1] % 2 == 0)){
            right = mid - 2;
        }
        else if ((array[mid] % 2 == 0) && (array[mid - 1] % 2 != 0)){
            return mid;
        }
    }
    return left++;
}
let array = [5,17,11,9,12,8,16,10,300];
console.log(binar(array));