// Бинарный поиск

// 1

function binar(array, num){
    let z = -1;
    let right = array.length - 1;
    let left = 0;

    while (left <= right){
        let mid = Math.floor((right - left) / 2) + left;
        if (num > array[mid]){
            left = mid + 1;
        }
        else if (num < array[mid]){
            right = mid - 1;
        }
        else if (num == array[mid]){
            return mid;
        }
    }
    return -1;
}
let array = [1, 2, 3, 4, 5, 6, 7];
let num = 3;
console.log(binar(array, num));


// 2

function cubeRoot(a){
    let left = 0;
    let right = a;
    let mid;
    while (right - left >= 0.0001){
        mid = (right - left) / 2 + left;
        if (Math.pow(mid, 3) < a){
            left = mid;
        }
        else if (Math.pow(mid, 3) >= a){
            right = mid;
        }
    }
    return mid;
} 
let a = 33;
console.log(cubeRoot(a));