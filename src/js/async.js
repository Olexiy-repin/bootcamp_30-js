'use strict';
/*
 * Синхронный vs Асинхронный JS
 */

// Стек вызова функций

// Фунции отложенного вызова window.setTimeout(callback, delay, arg1, arg2, ...);
// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!

// console.log('Start');

// setTimeout(() => {
//   console.log('Hello!');
// }, 1000);

// let count = 0;
// for (let i = 0; i < 1000000000; i += 1) {
//   count = i;
// }
// console.log(count);

// console.log('End');

// Очистка интервалов и таймаутов clearInterval(intervalID), clearTimeout(timeoutID)

// const intervalId = setInterval(() => {
//   console.log('Hello!');
// }, 1000);

// document.addEventListener('click', event => {
//   clearInterval(intervalId);
// });
