// Размен монетами

// Монеты 1, 5, 10, 15. Разменять сумму
// минимальным количеством монет.
// Сумма 100 = 4*25
// Сумма 104 = 6*15+1*10+0*5+4*1

// Монеты 1, 5, 7.
// Сумма 24 = 3*7+3*1   6 монет
// Сумма 24 = 2*7+2*5   4 монеты


// Задача №1

// Монеты 1, 5, 10, 25. Разменять сумму
// минимальным количеством монет.
// 113 = 25*4+10*1+1*3

// Моё решение 1

// const wholeSum = 113;
// let sum = 113;
// let count25 = 0;
// let count10 = 0;
// let count5 = 0;
// let count1 = 0;

// count25 = Math.floor(sum / 25);
// sum = sum - 25 * count25;
// count10 = Math.floor(sum / 10);
// sum = sum - 10 * count10;
// count5 = Math.floor(sum / 5);
// sum = sum - 5 * count5;
// count1 = Math.floor(sum / 1);
// sum = sum - 1 * count1;

// console.log(`Чтобы разменять ${wholeSum} нужно:
//                             ${count25} – по 25,
//                             ${count10} – по 10,
//                             ${count5} – по 5,
//                             ${count1} – по 1`);


// Задача №2 (на баллы, дорешать)

// let start1 = new Date(2023, 2, 10, 13, 0, 0);
// let end1 = new Date(2023, 2, 10, 15, 0, 0);

// let start2 = new Date(2023, 2, 10, 15, 10, 0);
// let end2 = new Date(2023, 2, 10, 19, 10, 0);

// let start3 = new Date(2023, 2, 10, 14, 0, 0);
// let end3 = new Date(2023, 2, 10, 15, 20, 0);

// let start4 = new Date(2023, 2, 10, 16, 00, 0);
// let end4 = new Date(2023, 2, 10, 17, 00, 0);

// let start5 = new Date(2023, 2, 10, 17, 10, 0);
// let end5 = new Date(2023, 2, 10, 18, 10, 0);

// let scheduleEnds = [end1, end2, end3, end4, end5];

// for (let i = 0; i < scheduleEnds.length; i++){
//     if (scheduleEnds.sort((a, b) => a - b)[i] < scheduleEnds.sort((a, b) => a - b)[i++]){

//     }
// }
// console.log(scheduleEnds.sort((a, b) => a - b));


// Рюкзак (размер входа n = кол-во вещей, O(2^n))
// Объём = 40 л. Максимизировать стоимость вещей в рюкзаке.
// 0 – не берём  / 1 – берём
// 1 вещь = 10 л = 60 долларов
// 2 вещь = 20 л = 100 долларов
// 3 вещь = 30 л = 120 долларов
// Правильный ответ: 1 и 3
// 1. Самое дорогое
// 2. Самое маленькое
// 3. Самую большую стоиимость за литр – ответ не более чем в 2 раза хуже правильного

// Задача №3

// Рюкзак (размер входа 10 = кол-во вещей, O(2^10))
// Объём = 40 л. Максимизировать стоимость вещей в рюкзаке.