'use strict';
/*
 * Деструктуризация объектов
 */

// const user = {
//   username: 'John',
//   lastName: 'Reese',
//   age: 30,
// };

/*
? Напишите деструктурирующее присваивание, которое:
? свойство username присвоит в переменную username.
? свойство age присвоит в переменную userAge.
? свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/

// const { username, age: userAge, isAdmin = false } = user;

// console.log(username);
// console.log(userAge);
// console.log(isAdmin);

/*
 * Глубокая деструктуризация объектов
 */

// const team = {
//   //   names: {
//   //     firstName_1: 'Anton',
//   //     firstName_2: 'Oleg',
//   //   },
//   number: 4,
//   flag: './images/flag.jpg',
//   employee: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
// };

// // const { number, names } = team;
// // const { firstName_1, firstName_2 } = names;

// const { number, flag, ...otherProps } = team;

// console.log(number);
// console.log(flag);
// console.log(otherProps);

// console.log(userName);
// console.log(firstName_2);

/*
 * Деструктуризация массивов
 */

// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];
// const [user1, , , user4] = names;

// console.log(user1);
// console.log(user4);

/*
? У нас есть объект salaries с зарплатами:
? Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
?
? Если объект salaries пустой, то нужно вернуть null.
? Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
? P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// const topSalary = function (salaries) {
//   const salariesKeys = Object.keys(salaries);
//   const salariesValues = Object.values(salaries);

//   let max = salariesValues[0];
//   let idxOfEmployee = 0;

//   for (let i = 1; i < salariesValues.length; i += 1) {
//     if (salariesValues[i] > max) {
//       max = salariesValues[i];
//       idxOfEmployee = i;
//     }
//   }

//   return salariesKeys[idxOfEmployee];
// };

// const topSalary = function (salaries) {
//   const arrOfArr = Object.entries(salaries);
//   let max = 0;
//   let employee = null;

//   for (const [name, salary] of arrOfArr) {
//     if (salary > max) {
//       max = salary;
//       employee = name;
//     }
//   }

//   return employee;
// };

// console.log(topSalary(salaries));
