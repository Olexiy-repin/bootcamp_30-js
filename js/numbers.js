'use strict';

/*
 * Математические операторы (+, -, *, /, %, **)
 */
// const a = 2;
// const b = 3;

// const result = 2 + 4;

// console.log(result);
/*
 ? Данно два числа 10 и 20.
 ? Проведите над этими числами математические операции (+ - / *).
*/

//? Проверьте четные ли числа 15, 20, 45, 30.
// const result = 30 % 2;
// console.log(result);
/*
  ? Данно 90 минут, узнайте сколько в данном числе содержиться часов и минут.
  ? Результат выведите в консоль.
*/
// const totalMinutes = 50;

// let hours = totalMinutes / 60;
// hours = Math.floor(hours);

// const minutes = totalMinutes % 60;

// console.log(hours);
// console.log(minutes);

/*
 * Number.parseInt() Number.parseFloat()
 */
// let userAge = prompt('Сколько вы проехали км?');

// let userAge = Number(false);

// console.log(userAge)
/* 
  ? Попросите пользователя ввести число.
  ? Выведите результат в консоль.
  ? Приведите строку к числу.
*/

//? Данна строка '24px', достаньте с этой строки целое число.
// let str = '24px';
// str = Number.parseInt(str);

// console.log(str);

//? Данна строка '25.5%', достаньте с этой строки дробное число.
// let str = '25.5%';
// str = Number.parseFloat(str);

// console.log(str);

//? Попробуйте привести к числу, данную строку 'abc'.
// let str = 'abc';
// str = Number(str);

// console.log(str);

//? Запросите у пользователя ввести два числа, сложите их и выведите результат в консоль.
// const a = Number(prompt('Введите первое число'));
// const b = Number(prompt('Введите второе число'));
// const result = a + b;

// console.log(result);
/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

/*
  ? Данно число 23.5, примените к нему различный методы округления.
  ? Протестируйте на числах, 23.3, 23.9
*/
// const number = 23.9;

// const result = Math.round(number);

// console.log(result);

/*
  ? Попросите пользователя ввести число и степень.
  ? Возведите число в степень и выведете результат в консоль.
*/
// const number = prompt('Введите число');
// const power = prompt('Введите степень');

// const result = Math.pow(number, power);

// console.log(result);

/*
  ? Сгенирируйте рандомное число:
  ? от 0 до 1;
  ? от 10 до 50.
*/
// Math.floor(min + Math.random() * (max + 1 - min));
// const min = 0;
// const max = 255;

// const r = Math.floor(min + Math.random() * (max + 1 - min));
// const g = Math.floor(min + Math.random() * (max + 1 - min));
// const b = Math.floor(min + Math.random() * (max + 1 - min));

// document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

//? Сгенирируйте рандомное число. Минимальное и максимально значение, получить от пользователя
// const min = Number(prompt('Введите минимальное значение диапазона'));
// const max = Number(prompt('Введите максимальное значение диапазона'));

// const result = Math.floor(min + Math.random() * (max + 1 - min));

// console.log(result);
