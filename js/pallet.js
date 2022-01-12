'use strict';
const palletEl = document.querySelector('.js-pallet');
const palletItemEl = document.querySelectorAll('.js-pallet > li');

const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};

const paintElements = () => {
  palletItemEl.forEach(element => {
    const color = randomColor();

    element.style.backgroundColor = color;
    element.dataset.color = color;
  });
};

paintElements();

palletEl.addEventListener('click', event => {
  const target = event.target.closest('.pallet__item');
  const bgColor = target.dataset.color;
  const outputEl = target.querySelector('span');

  outputEl.textContent = bgColor;
});
