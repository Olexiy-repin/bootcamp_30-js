'use strict';
// Создание новой даты

// Методы даты

// console.log(date);
//? TASK 01
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// const date = new Date(2012, 1, 20, 3, 12);

// console.log(date);

//? TASK 02
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
// const getWeekDay = date => {
//   const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   return days[date.getDay()];
// };

// const date = new Date();
// console.log(getWeekDay(date));

//? TASK 03
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month);

//   return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// };

// console.log(getLastDayOfMonth(2012, 1));

//? TASK 04
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// const getSecondsToTomorrow = () => {
//   const now = new Date();
//   const tommorow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//   const diff = tommorow - now;

//   const seconds = diff / 1000;
//   const minutes = diff / 1000 / 60;
//   const hours = Math.floor(diff / 1000 / 60 / 60);

//   return seconds;
// };

// console.log(getSecondsToTomorrow());
