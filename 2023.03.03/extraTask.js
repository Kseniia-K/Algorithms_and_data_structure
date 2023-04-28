// Найти количество разбиений натурального числа n на 
// натуральные слагаемые. Если в разбиениях отличается только
// порядок слагаемых, то их считать за одно
// Пример Input: 5 Output: 7
// 5=5=4+1=3+2=3+1+1=2+2+1=2+1+1+1=1+1+ +1+1+1

function summand(n, array) {
    for (let i = 0; i < n; i++){
        array[i] = n;
        summand
    }
    return array;
}
let n = 5;
let cnt = 0;
let array = [];
console.log(summand(n, array));






// function summand(n, m, cnt) {
//     if (n == 1) {
//         return (++cnt);
//     }
//     else if (n > 1) {
//         // return summand((n - m), m, cnt);
//         return summand((n - summand(n - m, m, cnt)), m, cnt);
//     }
//     else {
//         return "Error";
//     }
// }
// let cnt = 0;
// let n = 5;
// let m = 1;
// console.log(summand(n, m, cnt));

// function summand(n, m, cnt) {
//     if (n == 1) {
//         return ++cnt;
//     }
//     else if (n > 1) {
//         cnt++;
//         if (n+m == 5) {
//             cnt++;
//         }
//         if (n+m+1 == 5) {
//             cnt++;
//         }
//         if(n+(m+1) == 5)
//         return summand((n - m), m, cnt);
//     }
//     else {
//         return "Error";
//     }
// }
// let cnt = 0;
// let n = 5;
// let m = 1;
// console.log(summand(n, m, cnt));

// function summand(n, cnt) {
//     if (n == 1) {
//         return ++cnt;
//     }
//     else if (n > 1) {
//         return summand(n - 1, cnt);
//     }
//     else {
//         return "Error";
//     }
// }
// let cnt = 0;
// let n = 5;
// console.log(summand(n, cnt));

// function summand(n, cnt) {
//     if (n == 1) {
//         return ++cnt;
//     }
//     else if (n > 1) {
//         return summand(n - 1, ++cnt);
//     }
//     else {
//         return "Error";
//     }
// }
// let cnt = 0;
// let n = 5;
// console.log(summand(n, cnt));