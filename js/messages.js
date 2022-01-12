'use strict';
const messagesWrapper = document.querySelector('.js-messages-wrapper');

messagesWrapper.addEventListener('click', event => {
  const target = event.target;

  if (target.nodeName !== 'BUTTON') {
    return;
  }

  const messageEl = target.closest('.message');

  messageEl.remove();
});
