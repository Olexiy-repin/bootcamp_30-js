'use strict';
// https://jsonplaceholder.typicode.com/

// const request = fetch('https://jsonplaceholder.typicode.com/posts');

// request
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 01
// Создайте функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.
// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

// Важные детали:

// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.

const BASE_URL = 'https://api.github.com';
const userLogins = ['luxplanjay', 'olexiy-repin', 'salikovskyi'];

const getUser = login => {
  return fetch(`${BASE_URL}/users/${login}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

const getUsers = logins => {
  const promises = logins.map(e => {
    return getUser(e);
  });

  return Promise.all(promises);
};

getUsers(userLogins)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

// const makePromise = (text, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text);
//     }, delay);
//   });
// };

// const promiseA = makePromise('promiseA value', 1000);
// const promiseB = makePromise('promiseB value', 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch(error => console.log(error));
