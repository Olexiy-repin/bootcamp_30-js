'use strict';

// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Загрузка скрипта
 */
//? Создайте функцию loadScript(url), которая будет создавать и вставлять скрипт на страницу
// const loadScript = (url, cb) => {
//   const script = document.createElement('script');
//   script.src = url;

//   script.addEventListener('load', () => {
//     cb(script);
//   });

//   script.addEventListener('error', () => {
//     cb(null, 'Error');
//   });

//   document.body.append(script);
// };

// loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js', (script, err) => {
//   if (script) {
//     console.log(`${script.src} успешно загружен`);

//     loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//       (script, err) => {
//         if (script) {
//           console.log(`${script.src} успешно загружен`);

//           loadScript(
//             'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
//             (script, err) => {
//               if (script) {
//                 console.log(`${script.src} успешно загружен`);
//               } else {
//                 console.log(err);
//               }
//             }
//           );
//         } else {
//           console.log(err);
//         }
//       }
//     );
//   } else {
//     console.log(err);
//   }
// });

//? Передайте кобэк, который буде вызываться по завершению загрузки скрипта

//? Обработка ошибок

//? Загрузка нескольких скриптов

//? Адская пирамида колбэков

//? Решение через промисы

const loadScript = url => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;

    script.addEventListener('load', () => {
      resolve(script);
    });

    script.addEventListener('error', () => {
      reject('Error');
    });

    document.body.append(script);
  });
};

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
  .then(script => {
    console.log(`${script.src} успешно загружен`);
    return loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js');
  })
  .then(script => {
    console.log(`${script.src} успешно загружен`);
    return loadScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js');
  })
  .then(script => {
    console.log(`${script.src} успешно загружен`);
  })
  .catch(err => {
    console.log(err);
  });
