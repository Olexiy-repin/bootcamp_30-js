'use strict';
const accordionBtns = document.querySelectorAll('.js-accordion-btn');
const panelsEl = document.querySelectorAll('.js-panel');

const openPanel = event => {
  const target = event.currentTarget;

  panelsEl.forEach(e => {
    e.classList.remove('active');
  });

  target.nextElementSibling.classList.toggle('active');
};

accordionBtns.forEach(e => {
  e.addEventListener('click', openPanel);
});
