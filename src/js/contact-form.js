'use strict';
import localStorageApi from './localstorage';

// 1 способ
// const contactFormEl = document.querySelector('.js-contact-form');

// const fillEmailField = () => {
// if (!localStorage.length) {
//   return;
// }
//   const keys = Object.keys(localStorage);

//   for (const key of keys) {
//     contactFormEl.elements[key].value = localStorage.getItem(key);
//   }
// };

// fillEmailField();

// contactFormEl.addEventListener('change', event => {
//   const target = event.target;
//   localStorage.setItem(target.name, target.value);
// });

// contactFormEl.addEventListener('submit', event => {
//   event.preventDefault();

//   event.target.reset();
//   localStorage.clear();
// });

// 2 способ
const contactFormEl = document.querySelector('.js-contact-form');
const formData = {};

contactFormEl.addEventListener('change', event => {
  const target = event.target;

  formData[target.name] = target.value;

  //   localStorage.setItem('formData', JSON.stringify(formData));
  localStorageApi.save('formData', formData);
});

contactFormEl.addEventListener('submit', event => {
  event.preventDefault();

  event.target.reset();
  //   localStorage.removeItem('formData');
  localStorageApi.remove('formData');
});

const fillFormFields = () => {
  if (!localStorage.length) {
    return;
  }

  //   const localStorageFormData = JSON.parse(localStorage.getItem('formData'));
  const localStorageFormData = localStorageApi.load('formData');
  const keys = Object.keys(localStorageFormData);

  for (const key of keys) {
    contactFormEl.elements[key].value = localStorageFormData[key];
  }
};

fillFormFields();
