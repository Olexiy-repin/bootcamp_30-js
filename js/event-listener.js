'use strict';
/*
 * Основы событий. Создание и удаление слушателей. Объект события
 */

/*
 ?- Именование колбеков для слушателей
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

// https://picsum.photos/200/300

const swapBtnEl = document.querySelector('.js-swap-btn');
const imgEl = document.querySelector('.js-img');
const removeListenerBtnEl = document.querySelector('.js-remove-listener');

const onSwapBtnClick = event => {
  imgEl.src = 'https://picsum.photos/200/300';
  imgEl.alt = 'random image';
};

swapBtnEl.addEventListener('click', onSwapBtnClick);

removeListenerBtnEl.addEventListener('click', event => {
  swapBtnEl.removeEventListener('click', onSwapBtnClick);
});
