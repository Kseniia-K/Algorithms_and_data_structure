// Дан массив из нечетных и четных чисел. 
// Сначала идут нечетные, потом четные. 
// Найти, с какого индекса начинаются четные числа в массиве. 
// (Input: [5,17,11,9,12,8,16,10,300]. Output: 4)
// Oцените вычислительную сложность.
// Решать задачу нужно, используя бинарный поиск.

function binar(array){
    let z = -1;
    let right = array.length - 1;
    let left = 0;

    while (left <= right){
        let mid = Math.floor((right - left) / 2) + left;
        if (array[mid] % 2 == 0){
            return mid;
        }
        else if (array[mid] % 2 != 0){
            if (mid > left){
                left++;
                right++;
            }
            else if (mid < right){
                right--;
            }
        }
    }
    return -1;
}
let array = [5,17,11,9,13,9,19,11,300];
console.log(binar(array));