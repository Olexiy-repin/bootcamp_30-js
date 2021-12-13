"use strict";
/*
 * Циклы (while, do while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тело цикла (statement)
// }

// let iterator = 0;

// while (iterator < 10) {
//   console.log(iterator);
//   iterator = iterator + 1;
// }

/*
? Выведите числа от 1 до 50
*/

// const max = 50;
// let num = 1;

// num -= 1;
// num = num - 1;
// console.log(num);

// console.log(num--);
// console.log(num);

// while (num <= max) {
//   console.log(num);
//   num += 1;
// }

/*
? Найдите сумму чисел от 1 до 100
 */

// const max = 100;
// let iterator = 1;
// let result = 0;

// // true
// while (iterator <= max) {
//   // result = result + iterator;
//   result += iterator;
//   // iterator = iterator + 1;
//   iterator += 1;
// }

// console.log(result);

/*
? Дано число n=1000.
? Делите его на 2 столько раз, пока результат деления не станет меньше 50.
? Какое число получится?
? Посчитайте количество итераций, необходимых для этого, и запишите его в переменную num.
*/

// let n = 1000;
// let num = 0;

// while (n / 2 > 50) {
//   // n = n / 2;
//   n /= 2;
//   // num = num + 1;
//   num += 1;
// }

// console.log(n);
// console.log(num);

/*
 * Do While
 */
// do {
// statement
// } while (condition);

/*
? Напишите цикл, который предлагает prompt ввести число, большее 100.
? Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
? Цикл должен спрашивать число пока посетитель не введёт число, большее 100.
? Предполагается, что посетитель вводит только числа.
*/

// let num;

// do {
//   num = Number(prompt("Введите число больше 100"));
// } while (num < 100);

// console.log(num);

/*
 * For
 */
// for (инициализация; условие; пост-выражение) {
// тело цикла
// }

// i = i + 1;
// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);
// }

/*
? При помощи цикла for выведите чётные числа от 2 до 10.
*/

// const min = 3;
// const max = 10;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

/*
? Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
? Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
? а для чисел, делящихся на 5 – ‘Buzz’.
? Для чисел которые кратны 3 и 5 = 'FizzBuzz'
*/

// const min = 1;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = min; i <= max; i += 1) {
//   let str = "";

//   if (i % 3 === 0) {
//     //   str = str + 'Fizz';
//     str += "Fizz";
//   }

//   if (i % 5 === 0) {
//     //   str = str + 'Buzz';
//     str += "Buzz";
//   }

//   if (i % 3 !== 0 && i % 5 !== 0) {
//     console.log(i);
//     continue;
//   }

//   console.log(str);
// }

//  Первое решение
// for (let i = min; i <= max; i += 1) {
//   let str = "";

//   if (i % 3 === 0) {
//     str += "Fizz";
//   }

//   if (i % 5 === 0) {
//     str += "Buzz";
//   }

//   if (i % 3 !== 0 && i % 5 !== 0) {
//     console.log(i);
//     continue;
//   }

//   console.log(`${i}: ${str}`);
// }

// Второе решение
// for (let i = min; i <= max; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i}: FizzBuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`${i}: Fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i}: Buzz`);
//   } else {
//     console.log(i);
//   }
// }

/*
 ? Выведите методом console.log() звездочки от 1 до 7 штук в виде  треугольника таким образом:
 ? *
 ? **
 ? ***
 ? ****
 ? *****
 ? ******
 ? *******
 */

// let star = "*";

// for (let i = 0; i < 7; i += 1) {
//   console.log(star);
//   //star = star + '*';
//   star += "*";
// }

// const num = 10;

// if (true) {
//   const num = 15;
//   console.log("num: ", num);
//   if (true) {
//     const num = 20;
//     console.log("num: ", num);
//   }
// }

// if (true) {
//   const num = 30;
//     console.log("num: ", num);
// }

// console.log("num: ", num);
