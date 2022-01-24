'use strict';

export default class unsplashAPI {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor({ query = '' } = {}) {
    this.page = 1;
    this.query = query;
  }

  fetchImages() {
    return fetch(
      `${this.#BASE_URL}/search/photos?client_id=${this.#API_KEY}&query=${this.query}&page=${
        this.page
      }&per_page=10`,
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
  }
}
