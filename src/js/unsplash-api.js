'use strict';

import axios from 'axios';

export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor(keyword = null) {
    this.page = 1;
    this.keyword = keyword;
  }

  fetchPhotos() {
    return axios.get(`${this.#BASE_URL}/search/photos`, {
      params: {
        query: this.keyword,
        page: this.page,
        per_page: 12,
        client_id: this.#API_KEY,
      },
    });
  }

  getRandomPhotos() {
    return axios.get(`${this.#BASE_URL}/photos/random`, {
      params: {
        count: 12,
        client_id: this.#API_KEY,
      },
    });
  }
}
