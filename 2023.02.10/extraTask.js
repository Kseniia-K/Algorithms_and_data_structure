// Вычислить сумму ряда 7 + 7*2 + 7*3 + 7*4+ … +7*n

function row(n, currentNum) {
    if (currentNum == n) {
        return 7 * n
    }
    return 7 * currentNum + row(n, currentNum + 1)
}
console.log(row(3,1));

// Недоработанный вариант
// function fib(n) {
//     let ultrares = 1;
//     let res = 7;
//     let x = 0;
//     if (n == 1) {
//         return res;
//     }
//     // return x += res + (res + (ultrares++ * fib(n - 1))) + fib(n - 1);
//     return x += (ultrares++ * fib(n - 1)) + fib(n - 1);
// }
// console.log(fib(4));