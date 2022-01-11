'use strict';
const openModalBtnEl = document.querySelector('.js-modal-open');
const backdropEl = document.querySelector('.js-backdrop');
const closeModalBtnEl = document.querySelector('.js-modal-close');

const closeModal = () => {
  document.removeEventListener('keydown', onDocumentKeydownEsc);
  backdropEl.classList.remove('is-open');
};

const onDocumentKeydownEsc = event => {
  if (event.code === 'Escape') {
    closeModal();
  }
};

openModalBtnEl.addEventListener('click', event => {
  document.addEventListener('keydown', onDocumentKeydownEsc);

  backdropEl.classList.add('is-open');
});

closeModalBtnEl.addEventListener('click', closeModal);
