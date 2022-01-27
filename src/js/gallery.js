'use strict';
// https://unsplash.com/

import { UnsplashAPI } from './unsplash-api';
import galleryCardsTemplate from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashAPI();

// unsplashApi.getRandomPhotos().then(({ data } = {}) => {
//   galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data));
// });

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

    if (data.results.length === 0) {
      loadMoreBtnEl.classList.add('is-hidden');
      return;
    }

    if (data.total_pages === 1) {
      galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data.results));
      loadMoreBtnEl.classList.add('is-hidden');
      return;
    }

    galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data.results));
    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
});

loadMoreBtnEl.addEventListener('click', async event => {
  try {
    unsplashApi.page += 1;

    const { data } = await unsplashApi.fetchPhotos();

    if (data.results.length === 0) {
      loadMoreBtnEl.classList.add('is-hidden');
      return;
    }

    if (data.total_pages === unsplashApi.page) {
      galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data.results));
      loadMoreBtnEl.classList.add('is-hidden');
      return;
    }

    galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data.results));
    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
});
