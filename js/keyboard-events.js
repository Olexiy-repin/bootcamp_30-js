'use strict';
/*
 * События клавиатуры. keypress, keydown, keyup
 */

const outputEl = document.querySelector('.js-output');

document.addEventListener('keydown', event => {
  event.preventDefault();

  if (event.code === 'KeyF' && (event.metaKey || event.ctrlKey)) {
    console.log('ok');
  }

  outputEl.insertAdjacentHTML('afterbegin', `key: ${event.key} code: ${event.code} <br> <hr>`);
});
