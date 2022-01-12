'use strict';
/*
 * Распространение событий (погружение, определение целевого элемента, всплытие)
 */

const textEl = document.querySelector('.text');
const divEl = document.querySelector('.div');
const sectionEl = document.querySelector('.section');

sectionEl.addEventListener(
  'click',
  event => {
    console.group();
    console.log('Обработчик на элементе <section>, фаза погружения');
    console.log('event.target -->', event.target);
    console.log('event.currentTarget -->', event.currentTarget);
    console.groupEnd();
  },
  { capture: true }
);

divEl.addEventListener(
  'click',
  event => {
    console.group();
    console.log('Обработчик на элементе <div>, фаза погружения');
    console.log('event.target -->', event.target);
    console.log('event.currentTarget -->', event.currentTarget);
    console.groupEnd();
  },
  { capture: true }
);

textEl.addEventListener(
  'click',
  event => {
    console.group();
    console.log('Обработчик на элементе <p>, фаза погружения');
    console.log('event.target -->', event.target);
    console.log('event.currentTarget -->', event.currentTarget);
    console.groupEnd();
  },
  { capture: true }
);

sectionEl.addEventListener('click', event => {
  console.group();
  console.log('Обработчик на элементе <section>,фаза всплытия');
  console.log('event.target -->', event.target);
  console.log('event.currentTarget -->', event.currentTarget);
  console.groupEnd();
});

divEl.addEventListener('click', event => {
  console.group();
  console.log('Обработчик на элементе <div>, фаза всплытия');
  console.log('event.target -->', event.target);
  console.log('event.currentTarget -->', event.currentTarget);
  console.groupEnd();
});

textEl.addEventListener('click', event => {
  console.group();
  console.log('Обработчик на элементе <p>, фаза всплытия');
  console.log('event.target -->', event.target);
  console.log('event.currentTarget -->', event.currentTarget);
  console.groupEnd();
});
