export default class ModalApi {
  #onCloseBtnClick = this.#closeBtnHandler.bind(this);
  #onModalCloseByEsc = this.#closeModalByEscapePress.bind(this);

  constructor(backdrop) {
    this.backdrop = backdrop;

    this.closeBtn = this.backdrop.querySelector('button[data-modal-close]');
  }

  open() {
    this.backdrop.classList.remove('is-hidden');

    this.closeBtn.addEventListener('click', this.#onCloseBtnClick);
    window.addEventListener('keydown', this.#onModalCloseByEsc);
    this.backdrop.addEventListener('click', event => {
      if (event.target.id === this.backdrop.id) {
        this.close();
      }
    });
  }

  close() {
    this.backdrop.classList.add('is-hidden');

    this.closeBtn.removeEventListener('click', this.#onCloseBtnClick);
    window.removeEventListener('keydown', this.#onModalCloseByEsc);
  }

  #closeBtnHandler() {
    this.close();
  }

  #closeModalByEscapePress(event) {
    if (event.code === 'Escape') {
      this.close();
    }
  }
}
