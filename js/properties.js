'use strict';
//* Аттрибуты как свойства объекта
// const mainTitleEl = document.querySelector('.js-main-title');
// mainTitleEl.textContent = 'Title';

// const textEl = document.querySelector('.js-desc');
// textEl.textContent = 'Some text';

// https://picsum.photos/id/1025/200/300
// const swapBtnEl = document.querySelector('button[data-swap-btn]');
// const imgEl = document.querySelector('.js-img');

// console.log(swapBtnEl.dataset.swap);

// swapBtnEl.addEventListener('click', () => {
//   if (swapBtnEl.dataset.swap === 'false') {
//     swapBtnEl.dataset.swap = 'true';
//     imgEl.src = 'https://picsum.photos/id/1025/200/300';
//     imgEl.alt = 'Mops';
//     return;
//   }

//   swapBtnEl.dataset.swap = 'false';
//   imgEl.src = 'https://picsum.photos/id/237/200/300';
//   imgEl.alt = 'Labrador';
// });

/*
 * Доступ к аттрибутам
 *
 * elem.hasAttribute(name)
 * elem.getAttribute(name)
 * elem.setAttribute(name, value)
 * elem.removeAttribute(name)
 * elem.attributes
 */

// const imgEl = document.querySelector('.js-img');
// imgEl.setAttribute('src', 'https://picsum.photos/id/1025/200/300');

// imgEl.src = 'https://picsum.photos/id/1025/200/300';

// Data аттрибуты
