'use strict';
/*
 *  Массивы: литерал массива, элементы, индексация, длина
 */

/*
? Создайте массив genres с элементами «Jazz» и «Blues».
? Добавьте «Рок-н-ролл» в конец.
? Выведите в консоль первый элемент массива.
? Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
? Удалите первый элемент и выведите его в консоль.
? Вставьте «Country» и «Reggy» в начало массива.
 */

// const genres = ['«Jazz»', '«Blues»'];
// genres.push('«Рок-н-ролл»');

// const lastIndexOfGenres = genres.length - 1;

// console.log(genres[0]);
// console.log(genres[lastIndexOfGenres]);
// const firstRemovedElem = genres.shift();
// console.log(firstRemovedElem);
// genres.unshift('«Country»', '«Reggy»');
// console.log(genres);

/*
 * Передача по ссылке и по значению
 */

/*
? Создайте переменную a = 10.
? Создайте и присвойте переменной b -> переменную a
? Вывидите в консоль обе этих переменных
? Измените значение переменной a и ещё раз выведете в консоль
*/

// let a = 10; //10
// const b = a; //10

// console.log('a: ', a, 'b: ', b); //10 10

// a = 20; //20

// console.log('a: ', a, 'b: ', b); //20 10

/*
? Создайте массив arr1 = [1, 2, 3].
? Создайте и присвойте массиву arr2 -> массив arr1
? Вывидите в консоль оба эти массива
? Добавьте элемент в массив arr1 и ещё раз выведете оба массива в консоль
*/

// const arr1 = [1, 2, 3]; //[1, 2, 3]
// const arr2 = arr1; //[1, 2, 3]

// console.log('arr1: ', arr1, 'arr2: ', arr2);

// arr1.push(4); //[1, 2, 3, 4];

// console.log('arr1: ', arr1, 'arr2: ', arr2);

/*
 * Перебор массива циклами for и for...of
 */

// const numbers = [1, 2, 3, 4, 5, 6]; // 6

// for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];
//   //   console.log(number);
//   console.log(`${i}: ${numbers[i]}`);
// }

// for (const number of numbers) {
//   console.log(number);
// }

/*
? Напиши скрипт для перебора массива fruits циклом for.
? Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента.
? Нумерация элементов должна начинаться с 1.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

/*
? Напиши скрипт поиска самого маленького числа в массиве.
? Код должен работать для любого массива чисел.
? Используй цикл для решения задачи.
*/

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// 1 вариант решения
// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// 2 вариант решения
// for (let number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }

// console.log(min);
/*
? У нас есть массив с зарплатами сотрудников, нужно посчитать общую сумму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// 1 вариант решения
// for (let i = 0; i < salaries.length; i += 1) {
//   // total = total + salaries[i];
//   total += salaries[i];
// }

// 2 вариант решения
// for (const salary of salaries) {
//   // total = total + salary;
//   total += salary;
// }

// console.log(total);

/*
? У нас есть несколько массивов с зарплатами сотрудников из разных отделов, нужно посчитать общую сумму зарплат
*/

// 1 вариант решения
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;

// for (const salary of managerSalaries) {
//   total += salary;
// }

// for (const salary of developersSalaries) {
//   total += salary;
// }

// console.log(total);

// 2 вариант решения
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// const totalSalariesArr = [];
// let total = 0;

// for (const salary of managerSalaries) {
//   totalSalariesArr.push(salary);
// }

// for (const salary of developersSalaries) {
//   totalSalariesArr.push(salary);
// }

// for (let salary of totalSalariesArr) {
//   total += salary;
// }

// console.log(total);

// 3 вариант решения
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// const totalSalariesArr = managerSalaries.concat(developersSalaries);
// let total = 0;

// for (let salary of totalSalariesArr) {
//   total += salary;
// }

// console.log(total);

/*
 * Базовые методы: split и join, indexOf и includes, push, slice и splice, concat
 */

/*
? Напиши скрипт для вычисления площади прямоугольника со сторонами,
? значения которых хранятся в переменной values в виде строки.
? Значения гарантированно разделены пробелом.
*/

// const values = '8 11';
// const valuesArr = values.split(' ');
// const sideA = valuesArr[0];
// const sideB = valuesArr[1];

// const result = sideA * sideB;

// console.log(result);

/*
? Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
? В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
? Порядковый номер имен и телефонов в строках указывают на соответствие.
? Количество имен и телефонов гарантированно одинаковое.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
? Напиши скрипт который «разворачивает» строку (обратный порядок букв)
? и выводит ее в консоль.
*/

// 1 вариант решения
// const string = 'Welcome to the future';
// const symbolsArr = string.split('');
// const symbolsReverseArr = [];

// for (let i = symbolsArr.length - 1; i >= 0; i -= 1) {
//   symbolsReverseArr.push(symbolsArr[i]);
// }

// // for (let i = 0; i < symbolsArr.length; i += 1) {
// //   symbolsReverseArr.push(symbolsArr[symbolsArr.length - 1 - i]);
// // }

// const reverseStr = symbolsReverseArr.join('');

// console.log(string);
// console.log(reverseStr);

// 2 вариант решения
// const string = 'Welcome to the future';
// let reverseStr = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverseStr += string[i];
// }

// console.log(string);
// console.log(reverseStr);

/*
? У нас есть массив сотрудников, отсортируйте его, что бы сотрудники не повторялись
*/

// const employees = ['Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw', 'Watkins'];
// const filteredEmployees = [];

// for (let i = 0; i < employees.length; i += 1) {
//   if (employees.indexOf(employees[i]) === i) {
//     filteredEmployees.push(employees[i]);
//   }
// }

// //? Сотрудник Shaw уволился, удалите его из массива
// const idxOfRemovedElem = filteredEmployees.indexOf('Shaw');
// filteredEmployees.splice(idxOfRemovedElem, 1);

// //? Добавьте нового сотрудника Thornton, перед Watkins;
// const idxOfWatkins = filteredEmployees.indexOf('Watkins');

// filteredEmployees.splice(idxOfWatkins, 0, 'Thornton');

// console.log(filteredEmployees);
