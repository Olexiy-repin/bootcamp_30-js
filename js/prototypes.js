'use strict';
/*
 * Цепочки прототипов.
 * Object.create().
 * obj.hasOwnProperty()
 */

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Собственные свойства объекта и не собственные свойства

const firstObj = {
  a: 1,
};

console.log('firstObj: ', firstObj);

const secondObj = Object.create(firstObj);
secondObj.b = 2;

console.log('secondObj: ', secondObj);

const thirdObj = Object.create(secondObj);
thirdObj.c = 3;

console.log('thirdObj: ', thirdObj);

thirdObj.a = 10;

// console.log(thirdObj.a);

//* Провервка собественных свойства obj.hasOwnProperty()

//* Цикл for...in, перебирает все свойства, и собственные и не собственные.

// for (const key in thirdObj) {
//   if (thirdObj.hasOwnProperty(key)) {
//     console.log(`${key}: ${thirdObj[key]}`);
//   }
// }

const number = 5.45;

console.log(number.toFixed(1));
