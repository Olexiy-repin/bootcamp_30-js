'use strict';
/*
 * Функциональные выражения и объявление функции.
 * Параметры, аргументы, возврат.
 */

// function имя_функции(праметр_1, параметр_2...) {
// тело функции
// }

// function showMessage(username = 'anonym') {
//   // const username = 'Oleksii';

//   alert(`Hello ${username}!`);
// }

// showMessage();
// showMessage('Vasya');
// showMessage('Alexander');

// function sum(a = 10, b) {
//   // a = undefined
//   // b = undefined
//   console.log('a: ', a);
//   console.log('b: ', b);

//   const result = a + b;

//   console.log(result);
// }

// sum(2, 10);
// sum();

// function multi(a, b) {
//   const result = a * b;

//   if (result > 50) {
//     return result;
//   }

//   return 'Результат меньше 50';
// }

// const multiResult = multi(2, 10);
// console.log(multiResult);

// const multi = function (a, b) {
//   const result = a * b;

//   if (result > 50) {
//     return result;
//   }

//   return 'Результат меньше 50';
// };

// const multiResult = multi(3, 10);
// console.log(multiResult);

/*
? Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека.
? Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
? Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7,
? то есть в качестве разделителя дробной части может быть запятая.
? Индекс массы тела необходимо округлить до одной цифры после запятой;
*/

// const calcBMI = function (weight, height) {
//   //   let normalizeWeight = weight.replace(',', '.');
//   //   let normalizeHeight = height.replace(',', '.');

//   //   normalizeWeight = Number(normalizeWeight);
//   //   normalizeHeight = Number(normalizeHeight);

//   weight = Number.parseFloat(weight.replace(',', '.'));
//   height = Number.parseFloat(height.replace(',', '.'));

//   const result = weight / height ** 2;

//   return result.toFixed(1);
// };

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

/*
? Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.
*/

// const min = function (a, b) {
//   //   if (a < b) {
//   //     return a;
//   //   }

//   //   return b;

//   return a < b ? a : b;
// };

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

/*
? Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами,
? значения которых будут переданы в параметр dimensions в виде строки.
? Значения гарантированно разделены пробелом.
*/

// const getRectArea = function (dimensions) {
//   const sidesArr = dimensions.split(' ');
//   const sideA = sidesArr[0];
//   const sideB = sidesArr[1];

//   const result = sideA * sideB;

//   return result;
// };

// console.log(getRectArea('8 11'));
// console.log(getRectArea('18 11'));
// console.log(getRectArea('8 21'));

/*
? Напиши функцию logItems(items), которая получает массив и использует цикл for,
? который для каждого элемента массива будет выводить в консоль сообщение
? в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.
? Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango,
? а для индекса 2 выведет 3 - Ajax.
*/

// const logItems = function (items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя.
? В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми.
? Порядковый номер имен и телефонов в строках указывают на соответствие.
? Количество имен и телефонов гарантированно одинаковое.
*/

// const printContactsInfo = function (names, phones) {
//   names = names.split(',');
//   phones = phones.split(',');

//   for (let i = 0; i < names.length; i += 1) {
//     console.log(`${names[i]}: ${phones[i]}`);
//   }
// };

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// console.log('------------------');

// printContactsInfo('Vera,Carr,Violet,Sherman', '89001234567,89001112233,890055566377,890055566300');

/*
? Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.
*/

// const findLargestNumber = function (numbers) {
//   let max = numbers[0];

//   for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   //   for (const number of numbers) {
//   //     if (number > max) {
//   //       max = number;
//   //     }
//   //   }

//   return max;
// };

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
? Напишите функцию calcAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение.
? Все аругменты будут только числами.
*/

// const calcAverage = function (...args) {
//   //   const args = Array.from(arguments);
//   //   console.log(args);
//   let total = 0;

//   for (let number of args) {
//     total += number;
//   }

//   return total / args.length;
// };

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

/*
? Напишите функции для работы с коллекцией обучающих курсов courses:
? addCourse(name) - добавляет курс в конец коллекции
? removeCourse(name) - удаляет курс из коллекции
? updateCourse(oldName, newName) - изменяет имя на новое
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const addCourse = function (name) {
//   if (!courses.includes(name)) {
//     courses.push(name);
//     return;
//   }

//   console.log('У вас уже есть такой курс');
// };

// const removeCourse = function (name) {
//   // 1 вариант решения
//   //   const idxOfCourse = courses.indexOf(name);
//   //   if (idxOfCourse === -1) {
//   //     console.log('Курс с таким именем не найден');
//   //     return;
//   //   }
//   //   courses.splice(idxOfCourse, 1);
//   // ========================================================
//   // 2 вариант решения
//   if (courses.includes(name)) {
//     const idxOfCourse = courses.indexOf(name);
//     courses.splice(idxOfCourse, 1);
//     return;
//   }
//   console.log('Курс с таким именем не найден');
// };

// const updateCourse = function (oldName, newName) {
//   if (!courses.includes(oldName)) {
//     console.log('Курса с таким именем не найдено');
//     return;
//   }

//   if (courses.includes(newName)) {
//     console.log('У вас уже есть такой курс');
//     return;
//   }

//   const idxOfCourse = courses.indexOf(oldName);
//   courses.splice(idxOfCourse, 1, newName);
// };

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким именем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('С++', 'NestJS'); // 'Курса с таким именем не найдено'

// function fn() {
//   console.log('fn');

//   fn1();
// }

// function fn1() {
//   console.log('fn1');

//   fn2();
// }

// function fn2() {
//   console.log('fn2');
// }

// fn();
