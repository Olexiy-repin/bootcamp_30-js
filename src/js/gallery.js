'use strict';
// https://unsplash.com/

import unsplashAPI from './unsplash-api';
import galleryCardsTemplate from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new unsplashAPI();

searchFormEl.addEventListener('submit', event => {
  event.preventDefault();

  unsplashApi.query = event.currentTarget.elements['user-search-query'].value;
  unsplashApi.page = 1;
  galleryEl.innerHTML = '';

  unsplashApi.fetchImages().then(data => {
    if (data.results.length === 0) {
      galleryEl.innerHTML = '';
      loadMoreBtnEl.classList.add('is-hidden');
      return;
    }

    if (data.results.length < 10) {
      loadMoreBtnEl.classList.add('is-hidden');
      galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data));
      return;
    }

    galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data));
    loadMoreBtnEl.classList.remove('is-hidden');
  });
});

loadMoreBtnEl.addEventListener('click', () => {
  unsplashApi.page += 1;
  unsplashApi.fetchImages().then(data => {
    galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data));

    if (unsplashApi.page === data.total_pages) {
      loadMoreBtnEl.classList.add('is-hidden');
      return;
    }
  });
});
