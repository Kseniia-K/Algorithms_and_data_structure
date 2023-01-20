function findIndexArr(array, num){
    let z = -1;
    for(let i = 0; i < array.length; i++){
        if(array[i] == num){
            z = i;
        }
    }
    return z;
}
let array = [13, 21, 35, 25, 66, 77, 100];
let num = 21;
console.log(findIndexArr(array, num));