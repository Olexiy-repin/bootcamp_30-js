'use strict';
/*
 * События элементов форм. focus, blur, change, input, submit
 */

const userNameEl = document.querySelector('.js-username-input');
const nameOutputEl = document.querySelector('.js-username-output');
const checkboxEl = document.querySelector('.js-policy-checkbox');
const submitBtnEl = document.querySelector('.js-contact-form-submit');
const contactFormEl = document.querySelector('.js-contact-form');

// userNameEl.addEventListener('focus', event => {
//   console.log(event.currentTarget);

//   event.currentTarget.style.outlineColor = 'pink';
// });

// userNameEl.addEventListener('blur', event => {
//   event.currentTarget.style.outline = '2px solid blue';
// });

userNameEl.addEventListener('input', event => {
  nameOutputEl.textContent = event.currentTarget.value;
});

checkboxEl.addEventListener('change', function (event) {
  // 1 способ
  //   if (event.currentTarget.checked) {
  //     submitBtnEl.disabled = false;
  //   } else {
  //     submitBtnEl.disabled = true;
  //   }

  // 2 способ
  //   submitBtnEl.disabled = event.currentTarget.checked ? false : true;

  // 3 способ
  submitBtnEl.disabled = !this.checked;
});

contactFormEl.addEventListener('submit', event => {
  event.preventDefault();

  const target = event.currentTarget;
  console.log(target.elements);
  //   console.log(target.elements.username.value);
  //   console.log(target.elements['policy-accept'].value);
});
