'use strict';

import './sass/main.scss';
import throttle from 'lodash.throttle';
import { randomColor, sum } from './js/random-color';

const sectionElements = document.querySelectorAll('.section');

sectionElements.forEach(section => {
  section.style.backgroundColor = randomColor();
});

const onDocumentScroll = event => {
  console.log(window.pageYOffset);

  if (window.pageYOffset >= 800) {
    document.querySelector('.animated-section').classList.add('active');
    document.removeEventListener('scroll', throttledScrollFunction);
  }
};

const throttledScrollFunction = throttle(onDocumentScroll, 300);

document.addEventListener('scroll', throttledScrollFunction);
