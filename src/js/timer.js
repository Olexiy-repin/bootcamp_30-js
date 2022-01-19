'use strict';

const TIMER_DEADLINE = new Date(2022, 0, 20);

class Timer {
  #intervalId = null;
  #deadline = null;
  #refs = {};

  constructor(rootSelector, { deadline, backgroundColor = '#303030' } = {}) {
    this.#deadline = deadline;
    this.#refs.days = rootSelector.querySelector('.js-timer__days');
    this.#refs.hours = rootSelector.querySelector('.js-timer__hours');
    this.#refs.minutes = rootSelector.querySelector('.js-timer__minutes');
    this.#refs.seconds = rootSelector.querySelector('.js-timer__seconds');

    rootSelector.style.backgroundColor = backgroundColor;
    this.start();
  }

  start() {
    this.#intervalId = setInterval(() => {
      const now = Date.now();
      const diff = this.#deadline - now;

      if (diff <= 0) {
        this.stop();
        return;
      }

      const { days, hours, minutes, seconds } = this.#getTimeComponents(diff);

      this.#refs.days.textContent = this.#pad(days);
      this.#refs.hours.textContent = this.#pad(hours);
      this.#refs.minutes.textContent = this.#pad(minutes);
      this.#refs.seconds.textContent = this.#pad(seconds);

      this.#refs.days.dataset.title = this.#declensionNum(days, ['день', 'дня', 'дней']);
      this.#refs.hours.dataset.title = this.#declensionNum(hours, ['час', 'часа', 'часов']);
      this.#refs.minutes.dataset.title = this.#declensionNum(minutes, [
        'минута',
        'минуты',
        'минут',
      ]);
      this.#refs.seconds.dataset.title = this.#declensionNum(seconds, [
        'секунда',
        'секунды',
        'секунд',
      ]);
    }, 1000);
  }

  stop() {
    clearInterval(this.#intervalId);
  }

  #getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return { days, hours, minutes, seconds };
  }

  #pad(value) {
    return String(value).padStart(2, 0);
  }

  #declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }
}

const timer = new Timer(document.querySelector('.timer__items'), {
  deadline: TIMER_DEADLINE,
});

const secondTimer = new Timer(document.querySelector('.timer-second__items'), {
  deadline: new Date(2022, 0, 24),
  backgroundColor: 'tomato',
});

// const timer = {
//   intervalId: null,

//   start(rootSelector, deadline) {
//     this.intervalId = setInterval(() => {
//       const now = Date.now();
//       const diff = deadline - now;

//       if (diff <= 0) {
//         this.stop();
//         return;
//       }

//       const { days, hours, minutes, seconds } = this.getTimeComponents(diff);

//       rootSelector.querySelector('.js-timer__days').textContent = this.pad(days);
//       rootSelector.querySelector('.js-timer__hours').textContent = this.pad(hours);
//       rootSelector.querySelector('.js-timer__minutes').textContent = this.pad(minutes);
//       rootSelector.querySelector('.js-timer__seconds').textContent = this.pad(seconds);

//       rootSelector.querySelector('.js-timer__days').dataset.title = this.declensionNum(days, [
//         'день',
//         'дня',
//         'дней',
//       ]);
//       rootSelector.querySelector('.js-timer__hours').dataset.title = this.declensionNum(hours, [
//         'час',
//         'часа',
//         'часов',
//       ]);
//       rootSelector.querySelector('.js-timer__minutes').dataset.title = this.declensionNum(minutes, [
//         'минута',
//         'минуты',
//         'минут',
//       ]);
//       rootSelector.querySelector('.js-timer__seconds').dataset.title = this.declensionNum(seconds, [
//         'секунда',
//         'секунды',
//         'секунд',
//       ]);
//     }, 1000);
//   },

//   stop() {
//     clearInterval(this.intervalId);
//   },

//   getTimeComponents(diff) {
//     const days = Math.floor(diff / 1000 / 60 / 60 / 24);
//     const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
//     const minutes = Math.floor(diff / 1000 / 60) % 60;
//     const seconds = Math.floor(diff / 1000) % 60;

//     return { days, hours, minutes, seconds };
//   },

//   pad(value) {
//     return String(value).padStart(2, 0);
//   },

//   declensionNum(num, words) {
//     return words[
//       num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
//     ];
//   },
// };

// timer.start(document.querySelector('.timer__items'), TIMER_DEADLINE);
