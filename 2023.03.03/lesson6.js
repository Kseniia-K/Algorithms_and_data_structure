// Проверить, является ли строка палиндромом
// (Пример: цуфы вав ыфуц - True, qazxsw - Fаlse)


function isPalindrom(word){
    if ((word.length == 0) | (word.length == 1)){
       return 'True';
    } else if (word.substring(0,1) == word.substring(word.length-1)) {
        return isPalindrom(word.slice(1).slice(0,-1));
    }
    else {
        return 'False';
    }
}

let word = 'цуфы вав ыфуц';
console.log(isPalindrom(word));
let word2 = 'qazxsw';
console.log(isPalindrom(word2));