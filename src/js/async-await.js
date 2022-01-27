'use strict';

/*
 * async/await
 * асинхронная(async) функция ВСЕГДА возвращает промис.
 * await заставляет функцию ждать выполнения промиса.
 * await нельзя использовать вне асинхронных функций.
 * try/catch для отлова ошибок
 */

// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// const getAllPosts = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/posts`);

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const data = await response.json();

//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

// getAllPosts()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 01
// Перепеши на async/await
// async function loadPosts(url) {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const data = await response.json();

//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }

// (async () => {
//   try {
//     const posts = await loadPosts('https://jsonplaceholder.typicode.com/posts');
//     console.log(posts);
//   } catch (err) {
//     console.log(err);
//   }
// })();

//? TASK 02
// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait().then(data => {
//     console.log(data);
//   });
//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
// }

// f();
