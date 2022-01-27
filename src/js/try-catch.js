'use strict';

/*
 * try/catch
 * Ошибки фазы парсинга обработать нельзя. Только ошибки фазы выполнения.
 * Объект ошибки
 * try/catch работает только с синхронным кодом
 * Обработка ошибок в асинхронном коде
 */

console.log('Start!');

setTimeout(() => {
  try {
    const num = 10;
    num = 20;
  } catch (err) {
    console.log(err);
  }
}, 100);

console.log('End!');
