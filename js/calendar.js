'use strict';
const calendarEl = document.querySelector('.calendar');
let prevTdEl;

const onCalendarElClick = event => {
  const target = event.target;

  if (target.nodeName !== 'TD' || target.textContent === '') {
    return;
  }

  if (!prevTdEl) {
    prevTdEl = target;
  } else if (prevTdEl === target) {
    prevTdEl.classList.remove('active');
    return;
  } else {
    prevTdEl.classList.remove('active');
    prevTdEl = target;
  }

  target.classList.toggle('active');
};

calendarEl.addEventListener('click', onCalendarElClick);
