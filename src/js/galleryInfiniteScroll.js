'use strict';
// https://unsplash.com/

import { UnsplashAPI } from './unsplash-api';
import galleryCardsTemplate from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');

const unsplashApi = new UnsplashAPI();

// unsplashApi.getRandomPhotos().then(({ data } = {}) => {
//   galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data));
// });

const options = {
  rootMargin: '0px 0px 200px 0px',
  threshold: 1,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(async entry => {
    if (entry.isIntersecting) {
      try {
        unsplashApi.page += 1;

        const { data } = await unsplashApi.fetchPhotos();

        galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data.results));
      } catch (err) {
        console.log(err);
      }
    }
  });
}, options);

searchFormEl.addEventListener('submit', async event => {
  try {
    event.preventDefault();

    const keyword = event.currentTarget.elements['user-search-query'].value;

    if (keyword.trim() === '') {
      return;
    }

    unsplashApi.keyword = keyword;
    unsplashApi.page = 1;

    galleryListEl.innerHTML = '';

    const { data } = await unsplashApi.fetchPhotos();

    galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data.results));

    setTimeout(() => {
      observer.observe(document.querySelector('.target-element'));
    }, 100);
  } catch (err) {
    console.log(err);
  }
});

// 1 способ
// window.addEventListener('scroll', async event => {
//   let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

//   if (windowRelativeBottom <= document.documentElement.clientHeight + 100) {
//     try {
//       unsplashApi.page += 1;

//       const { data } = await unsplashApi.fetchPhotos();

//       galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data.results));
//     } catch (err) {
//       console.log(err);
//     }
//   }
// });

// 2 способ
