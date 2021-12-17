'use strict';

/*
 * Операция spread как замена concat и slice
 */

//*  Копия массива
// const numbers = [1, 2, 3, 4];
// const anotherNum = [10, 123, 56];
// const copy = [...numbers, ...anotherNum];

// copy[0] = 10;

// console.log('numbers: ', numbers);
// console.log('copy: ', copy);

//* Объединение массивов
// const numbers = [1, 2, 3, 4];
// const anotherNum = [10, 123, 56];

// const copy = [...anotherNum, 20, 23, ...numbers];

// console.log(copy);

//* Распыления массива в функцию
// const numbers = [1, 2, 3, 4];

// const result = Math.max(...numbers);

// console.log(result);

//* Распыления сложных типов
// const arrOfObjects = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const copyArr = _.cloneDeep(arrOfObjects);

// copyArr[0].a = 10;
// copyArr[1].b = 20;

// console.log('arrOfObjects: ', arrOfObjects);
// console.log('copyArr: ', copyArr);

/*
 * Операция spread как замена Object.asign({}, ...sources)
 */

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };

// const copy = _.cloneDeep(user);

// copy.firstName = 'Oleksii';
// copy.someArr[0] = 10;

// console.log('user: ', user);
// console.log('copy: ', copy);

/*
 * Операция rest
 */

//? Напишите функцию sum, которая сумирует произвольное количество аргументов
// const sum = function (...numbers) {
//   // ...args = 1, 2, 3, 4, 10, 20;

//   let total = 0;

//   for (let number of numbers) {
//     total += number;
//   }

//   return total;
// };

// const result = sum(1, 2, 3, 4, 10, 20);
// console.log(result);
