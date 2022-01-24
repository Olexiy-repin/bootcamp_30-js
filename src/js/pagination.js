'use strict';
// https://jsonplaceholder.typicode.com/

import createPostsMarkup from '../templates/posts.hbs';

const loadMoreEl = document.querySelector('.js-load-more');
const BASE_URL = 'https://jsonplaceholder.typicode.com';
let page = 0;

const appendPosts = data => {
  document.querySelector('.js-posts').insertAdjacentHTML('beforeend', createPostsMarkup(data));
};

const fetchPosts = () => {
  page += 1;

  return fetch(`${BASE_URL}/posts?_limit=10&_page=${page}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

fetchPosts().then(data => {
  appendPosts(data);
});

const loadMorePosts = () => {
  fetchPosts().then(data => {
    appendPosts(data);
  });
};

loadMoreEl.addEventListener('click', loadMorePosts);
