// Подсчёт кол-ва вхождений заданной буквы в строку.
//  a -> 5 (абракадабра)

// Вариант 1

// function CountLetters(str, letter) {
//     if (str.length == 0) {
//         return 0;
//     }
//     if (str[0] == letter) {
//         return 1 + CountLetters(str.substring(1), letter);
//     }
//     else {
//         return CountLetters(str.substring(1), letter);
//     }
// }

// console.log(CountLetters('абракадабра', 'а'));

// Вариант 2

// function CountLetters2 (str, letter){
//     if ((str.length == 1) && (str == letter)){
//         return 1;
//     }
//     if ((str.length == 1) && (str != letter)){
//         return 0;
//     }

//     let mid = Math.floor(str.length / 2);

//     return CountLetters2(str.substring(0, mid), letter) + CountLetters2(str.substring(str.length, mid), letter) //O(1)
// }

// console.log(CountLetters2('абракадабра', 'а'));

// a = 2;
// b = 2;
// d = 0;

// O(n)


// Перевод числа из десятичной системы в двоичную
// 11 -> 1011    8 -> 1000

// function conv(n){
//     let digit = n % 2;
//     if (n == 0){
//         return digit;
//     }
//     conv(Math.floor(n / 2));
//     console.log(digit);
// }
// conv(11);