'use strict';
/*
 * Конкатенация строк, шаблонные строки
 */

// const str = 'Hello';
// const firstName = 'Oleksii';
// const lastName = 'Repin';

// // const result = str + ' ' + firstName + ' ' + lastName;
// const result = `${str} ${firstName} ${lastName}`;

// console.log(result);

/*
  ? Запросите у пользователя имя с возрастом и выведете в консоль сообщение:
  ? Hello имя_пользователя, your age is возраст_пользователя .
*/

// const firstName = prompt('Your name?');
// const userAge = prompt('You age?');

// const result = 'Hello' + ' ' + firstName + ', ' + 'your age is' + ' ' + userAge;

// console.log(result);

//? Выполните задачу выше, используя шаблонные строки
// const firstName = prompt('Your name?');
// const userAge = prompt('You age?');

// const result = `Hello ${firstName}, your age is ${userAge}`;

// console.log(result);
/*
 * Свойства и Методы строк
 */

//? Запросите у пользователя имя и узнайте из скольких символов, состоит имя.
// const firstName = prompt('Your name');

// console.log(firstName.length);

//? Попросите пользователя ввести email и переведите в нижний регистр.
// const userEmail = prompt('Your email');
// const normalizedUserEmail = userEmail.toLowerCase();

// console.log(normalizedUserEmail);

//? Попросите пользователя ввести email и переведите в верхний регистр
// const userEmail = prompt('Your email');
// const normalizedUserEmail = userEmail.toUpperCase();

// console.log(normalizedUserEmail);

/*
  ? Есть строка 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Узнайте есть ли в этой строке язык: 'JavaScript', а 'JS'?.
  ? Если есть, узнайте позицию на которой находиться данная подстрока
*/
// let languagesStr = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';
// languagesStr = languagesStr.toLowerCase();

// const result = languagesStr.includes('js');
// const indexOfSubStr = languagesStr.indexOf('js');

// console.log(indexOfSubStr);
//? У нас есть строка '24px', узнайте на что заканчивается данная строка, на %, rem, em или px;
// const str = '24px';

// const result = str.endsWith('px');

// console.log(result);

//? У нас есть строка '23,4', замените запятую на точку
// const str = '23,4';
// const result = str.replace(',', '.');

// console.log(result);
/*
  ? У нас есть строка:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замените все вхожденя dog на monkey.
*/
// const str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// const result = str.replaceAll('dog', 'monkey');

// console.log(result);

//? У нас есть дата в формате '12:05:21', замените (:) на (.)
// const someDate = '12:05:21';
// const result = someDate.replaceAll(':', '.');

// console.log(result);

/*
  ? Данна строка 'Vasyl Pupkin is 24 years old'.
  ? Скопируйте с этой строки отдельно имя с фамилией и отдельно возраст.
*/
// const someStr = 'Vasyl Pupkin is 24 years old';

// const fullName = someStr.slice(0, 12);
// const indexOfAge = someStr.indexOf('24');
// const userAge = someStr.slice(indexOfAge, 18);

// console.log(`${fullName} ${userAge}`);
// console.log(userAge);
