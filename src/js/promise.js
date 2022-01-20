'use strict';

/*
 * Промисы
 */

// const promise = new Promise((resolve, reject) => {
//   const isDone = Math.random();

//   setTimeout(() => {
//     if (isDone < 0.5) {
//       resolve(10);
//     } else {
//       reject('Error');
//     }
//   }, 500);
// });

// promise
//   .then(data => {
//     result = data;
//     console.log(data); // 10

//     return data - 5;
//   })
//   .then(data1 => {
//     console.log(data1); // 5

//     return data1 * 10;
//   })
//   .then(data2 => {
//     console.log(data2); // 50
//   })
//   .catch(err => {
//     console.log(err);

//     return err + '!!!';
//   });

//? конструктор new Promise(callback(resolve, reject));

//? then(onSuccess, onError)

//? цепочка промисов и catch(onError)

//? finally()

//? TASK 01
// Можно ли "перевыполнить" промис?

// const promise = new Promise((resolve, reject) => {
//   resolve(1);

//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// });

//? TASK 02
// Что будет в консоли

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined
//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

//? TASK 03
// Что будет в консоли

// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
