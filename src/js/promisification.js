'use strict';
// https://api.github.com/users/olexiy-repin

// function myAsyncFunction(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.addEventListener('load', () => {
//       resolve(xhr.responseText);
//     });
//     xhr.addEventListener('error', () => {
//       reject(xhr.statusText);
//     });
//     xhr.send();
//   });
// }

// myAsyncFunction('https://api.github.com/users/olexiy-repin')
//   .then(data => {
//     console.log(JSON.parse(data));
//   })
//   .catch(console.log);
//? Запрос за пользавотелем на колбэках
// const fetchUserByName = (name, onSuccess, onError) => {
//   console.log('Делаем запрос на сервер...');

//   setTimeout(() => {
//     const isDone = Math.random();

//     if (isDone < 0.5) {
//       const user = {
//         firstName: name,
//         lastName: 'Francis',
//         age: 30,
//       };

//       onSuccess(user);
//     } else {
//       onError('Пользователя с таким именем не найдено');
//     }
//   }, 1000);
// };

// const handleSuccessFetch = data => {
//   console.log(data);
// };

// const handleErrorFetch = err => {
//   console.log(err);
// };

// fetchUserByName('Ida', handleSuccessFetch, handleErrorFetch);

//? Запрос за пользавотелем на промисах
// const fetchUserByName = name => {
//   console.log('Делаем запрос на сервер...');

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isDone = Math.random();

//       if (isDone < 0.5) {
//         const user = {
//           firstName: name,
//           lastName: 'Francis',
//           age: 30,
//         };

//         resolve(user);
//       } else {
//         reject('Пользователя с таким именем не найдено');
//       }
//     }, 1000);
//   });
// };

// fetchUserByName('Ida')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// function myAsyncFunction(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       resolve(xhr.responseText);
//     });
//     xhr.addEventListener('error', () => {
//       reject(xhr.statusText);
//     });
//   });
// }

// myAsyncFunction('https://api.github.com/users/whitecleancode')
//   .then(data => {
//     console.log(JSON.parse(data));
//   })
//   .catch(console.log);
