'use strict';

/*
 * for...in, Object.keys, Object.values
 */

//? Получите сумму зарплат всех сотрудников

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

//TODO: Через for...in
// console.log(salaries);

// let total = 0;

// for (const key in salaries) {
//   total += salaries[key];
// }

// console.log(total);

//TODO: Через Object.keys();
// const salariesKeys = Object.keys(salaries);
// let total = 0;

// for (const key of salariesKeys) {
//   total += salaries[key];
// }

// console.log(total);

//TODO: Через Object.values();
// const salariesValues = Object.values(salaries);

// let total = 0;

// for (const value of salariesValues) {
//   total += value;
// }

// console.log(total);

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);

// dog.name = 'Bob';

// console.log(dog);

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) {
//     continue;
//   }

//   console.log(dog[key]);
// }
