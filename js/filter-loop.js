'use strict';
/*
 *  Метод filter()
 */

// массив.filter((element, index, array) => {
// Тело коллбек-функции
// });

/*
? Отфильтруйте массив, что бы остались только чётные
*/

// const numbers = [1, 2, 3, 4, 5, 6];
// const filteredNumbers = numbers.filter(el => el % 2 === 0);

// console.log(filteredNumbers);

/*
? Отфильтруем массив, оставив в нем только положительные числа:
*/

// const numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// const positiveNumbers = numbers.filter(el => el >= 0);

// console.log(positiveNumbers);

/*
? Отфильтрум массив heroes по свойству объекта franchise.
*/

// const heroes = [
//   { name: 'Batman', franchise: 'DC' },
//   { name: 'Ironman', franchise: 'Marvel' },
//   { name: 'Thor', franchise: 'Marvel' },
//   { name: 'Superman', franchise: 'DC' },
// ];

// const filteredByFranchise = heroes.filter((el, idx, arr) => {
//   return el.franchise === 'Marvel';
// });

// console.log(filteredByFranchise);

/*
? Пусть функция filterByPrice возвращает массив автомобилей цена которых
? меньше чем значение параметра threshold.
*/

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// const filteredCars = cars.filter((el, idx, arr) => {
//   return el.price < 25000 && el.onSale && el.type === 'sedan';
// });

// console.table(filteredCars);

// const filterByPrice = (cars, threshold) => {
//   return cars.filter(el => el.price < threshold);
// };

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/*
? Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.
*/

// const getCarsWithDiscount = cars => {
//   return cars.filter(el => el.onSale);
// };

// console.table(getCarsWithDiscount(cars));

/*
? Пусть функция getCarsWithType возвращает массив автомобилей тип которых
? совпадает со значением параметра type.
*/

// const getCarsWithType = (cars, type) => {
//   return cars.filter(el => el.type === type);
// };

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

/*
? Отфильтруйте массив не уникальных значений
*/

// const names = ['Lelia', 'Hattie', 'Lelia', 'Mason', 'Nettie', 'Mason'];

// // 1 итерация 0 === 0
// // 2 итерация 1 === 1
// // 3 итерация 0 === 2

// const filteredNames = names.filter((el, idx, arr) => arr.indexOf(el) === idx);

// console.log(filteredNames);
