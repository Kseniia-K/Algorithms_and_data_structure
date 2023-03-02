// function recursion(n){
//     if (n == 1){
//         return 1;
//     }
//     else {
//         return n + recursion(n - 1);
//     }
// }
// console.log(recursion(3));

// function rec2(x, n){
//     if (n == 1){
//         return x;
//     }
//     else if (n == 0){
//         return 1;
//     }
//     else {
//         return x * rec2(x, n - 1);
//     }
// }
// console.log(rec2(2, 3));

// function fibonacchi(n){
//     if (n <= 1){
//         return n;
//     }
//     else {
//         return fibonacchi(n - 1) + fibonacchi(n - 2);
//     }
// }
// console.log(fibonacchi(25));
// console.log(fibonacchi(35));
// console.log(fibonacchi(39));
// console.log(fibonacchi(41));
// console.log(fibonacchi(42));
// console.log(fibonacchi(43));
// console.log(fibonacchi(44));
// console.log(fibonacchi(45));
// console.log(fibonacchi(5));

// let arr = [];
// function fib(n){
//     if (n == 0){
//         return 0;
//     }
//     if (n == 1){
//         return 1;
//     }
//     if(arr[n] > 0) {
//         return arr[n];
//     }
//     else {
//         return arr[n] = fib(n - 1) + fib(n - 2);
//     }
// }

// console.log(fib(46));

// №1

// function fac(n){
//     if (n <= 1){
//         return n;
//     }
//     else {
//         return fac(n - 1) * n;
//     }
// }
// console.log(fac(4));

// №2

// function rec2(a, n){
//     if (n == 1){
//         return a;
//     }
//     else if (n == 0){
//         return 1;
//     }
//     else {
//         return a * rec2(a, n - 1);
//     }
// }
// console.log(rec2(2, 3));

// №3

// function fastPow(x, n){
//     if (n == 0){
//         return 1;
//     }
//     else if (n % 2 != 0){
//         return fastPow(x, n - 1) * x;
//     }
//     else {
//         let y = fastPow(x, n / 2);
//         return y * y;
//     }
// }
// console.log(fastPow(2, 5));

// №4



// №5

// let arr = [];
// function letter(str, l){
//     if (arr[0] == ''){
//         return 0;
//     }
//     else if (arr[str.length - 1] == l){
//         return arr[str.length - 1] = letter(str.length - 1, arr[str.length - 2]);
//     }
//     else {
//         return arr.length;
//     }
// }
// console.log(letter('абракадабра', 'a'));

function letterFunc(str, letter){
    let count = 0;
    if (str.length == 0){
        return 0;
    }
    else if (str != letter) {
        if  (str.substring(str.length - 1) == letter){
            count++;
            str2 = str.substring(-1, 3);
            letterFunc(str2, letter);
        }
        return count;
    }
}
console.log(letterFunc('каша', 'a'));

// let str = 'каша';
// console.log(str.substring(3));
