'use strict';
import '../sass/main.scss';
import ModalApi from './modal-api';

const modalOpenBtnEl = document.querySelectorAll('button[data-modal-open]');

const modalForm = new ModalApi(document.querySelector('[data-modal-form]'));

modalOpenBtnEl.forEach(btn => {
  btn.addEventListener('click', event => {
    modalForm.open();
  });
});

// const user = {
//   email: 'ol@kizket.ly',

//   showEmail() {
//     console.log(this.email);
//   },
// };

// const show = function (cb) {
//   //   cb = user.showEmail
//   cb();
// };

// show(user.showEmail.bind(user));
