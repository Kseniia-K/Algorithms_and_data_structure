// Дан массив из нечетных и четных чисел. 
// Сначала идут нечетные, потом четные. 
// Найти, с какого индекса начинаются четные числа в массиве. 
// (Input: [5,17,11,9,12,8,16,10,300]. Output: 4)
// Oцените вычислительную сложность.
// Решать задачу нужно, используя бинарный поиск.

function binar(array){ // O(1)
    let right = array.length - 1; // O(2)
    let left = 0; // O(1)
    let is; // O(1)

    while (left <= right){ // O(log n)
        let mid = Math.floor((right - left) / 2) + left; // O(4)
        if (array[mid] % 2 != 0){ // O(2)
            left = mid + 1; // O(2)
            right++; // O(2)
            if ((left == array[array.length - 1]) && (array[array.length - 1] % 2 == 0)){ // O(6)
                is = true; // O(1)
                if(is){ // O(1)
                    return array.length - 1; // O(1)
                }
            }
            if((left == array[array.length - 1]) && (array[array.length - 1] % 2 != 0)){ // O(6)
                is = false; // O(1)
                if(!is){ // O(1)
                    return "В массиве нет чётных чисел!"; // O(1)
                }
            }
        }
        else if ((array[mid] % 2 == 0) && (array[mid - 1] % 2 == 0)){ // O(6)
            right = mid - 2; // O(2)
        }
        else if ((array[mid] % 2 == 0) && (array[mid - 1] % 2 != 0)){ // O(6)
            return mid; // O(1)
        }
    }
    return left++; // O(2)
}
let array = [5,17,11,9,12,8,16,10,300]; // O(1)
console.log(binar(array)); // O(1)

// Вычислительная сложность

// O(1+2+1+1+logn*43+2+1+1) = O(43logn+10) = O(43logn) = O(logn)