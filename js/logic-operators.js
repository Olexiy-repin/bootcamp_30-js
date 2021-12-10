'use strict';
/*
 * Логические операторы (&& || !)
 */

//* && - запинается на лжи
//* Если все операнды были истинными, возвращается последний.
//* Если результат false, останавливается и возвращает исходное значение этого операнда.
// const result = 2 && 10 && 20 && ' ' && 24;

// console.log(Boolean(''));

// console.log(result);

// const num = 15;

// const range = num > 10 && num < 30;

// console.log(range);

//* || - запинается на правде
//* Возвращает первое истинное значение или последнее, если такое значение не найдено.
// const result = false || '' || 10;

// console.log(result);

// let userName = prompt('Your name') || 'anonym';

// console.log(userName);
//* ! - инвертирует правду в ложь, а ложь в правду
// console.log(!0);

//? Логические операторы
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);

//? Преобразование типов
// console.log(2 + 5 + '' + 1 + 0);
// console.log('' + 1 - 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(7 / 0);
// console.log('  -9  ' + 5);
// console.log(null + 1);
