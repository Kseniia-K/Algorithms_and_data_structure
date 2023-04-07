// Проверить, является ли строка палиндромом
// (Пример: цуфы вав ыфуц - True, qazxsw - Fаlse)


function isPalindrom(word, reverseWord){
    if (word == reverseWord){
       return 'True';
    } else {
        // for (let i = word.length - 1; i >= 0; i--){
        //     reverseWord += word[i];
        // }
        isPalindrom(reverseWord += word[word.length - 1]);
    }
    return 'False';
}

let word = 'потоп';
let reverseWord = '';
console.log(isPalindrom(word, reverseWord));