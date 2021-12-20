'use strict';
/*
 * Колбэки, функции высшего порядка
 */

// const str = function () {
//   console.log('Hello');
// };

// const foo = function (param) {
//   param();
// };

// foo(str);

/*
? Приготовим суп. Напишите функцию которая выводит в консоль, что суп готовится.
? Пока суп готовиться мы убираем комнату (напишите функцию которая выводит в консоль, что вы убираете комнату).
? Когда суп готов, должна отработать функция о готовности супа.
 */
// const makeSoup = function (soupName, callback) {
//   console.log(`Суп ${soupName} готовится`);

//   setTimeout(() => {
//     callback(soupName);
//   }, 2000);
// };

// const roomCleaning = function () {
//   console.log('Я убираюсь в комнате');
// };

// const eatSoup = function (soupName) {
//   console.log(`Урааа! Суп ${soupName} готов! Можно и поесть`);
// };

// makeSoup('Ramen', eatSoup);
// roomCleaning();

//? Запрос на сервер
// const fetchUser = async function (userUrl, callback) {
//   const result = await fetch(`https://api.github.com/users/${userUrl}`);
//   callback(result);
// };

// const showInfoAboutUser = function (user) {
//   console.log(user);
// };

// fetchUser('olexiy-repin', showInfoAboutUser);

//? Регестрация событий на странице
// const userEmail = document.querySelector('.user-email');

// const logValues = function (e) {
//   console.log(e.target.value);
// };

// userEmail.addEventListener('change', logValues);

/*
? Напишите функцию each(array, callback), которая первым параметром ожидает массив, а вторым - функцию, которая применится к каждому элементу массива.
? Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека.
*/

// const numbers = [1, 2, 3, 4, 5];

// const each = function (array, callback) {
//   const newArr = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const result = callback(array[i], i, array);
//     newArr.push(result);
//   }

//   return newArr;
// };

// const multi = function (el, idx, arr) {
//   return el * 2;
// };

// const add = function (el, idx, arr) {
//   return el + 2;
// };

// console.log(each(numbers, multi));
// console.log(each(numbers, add));

/*
? Напишите следующие функции:
? createProduct(obj, callback) - принимает объект товара без id, а также колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
? logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
? logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль
*/

// const createProduct = function (obj, callback) {
//   // obj = { name: '🍎', price: 30, quantity: 3 };
//   // callback = logProduct;

//   const newProduct = {
//     id: Date.now(),
//     ...obj,
//   };

//   callback(newProduct);
// };

// const logProduct = function (product) {
//   // product = newProduct;
//   console.log(product);
// };

// const logTotalPrice = function (product) {
//   // product = newProduct;
//   console.log(product.price * product.quantity);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
? Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError), где первый параметр это сумма операции, а второй и третий - колбеки.
?
? Метод withdraw вызывает:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`) если amount больше TRANSACTION_LIMIT
? onError(`Amount can't exceed account balance of ${this.balance} credits`) если amount больше this.balance
? иначе снимаем деньги с баланса и вызываем onSuccess(`Account balance: ${this.balance}`)
?
? Метод deposit вызывает:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`) если amount больше TRANSACTION_LIMIT
? onError(`Amount must be more than 0 credits`) если amount меньше либо равен нулю
? иначе прибавляем к балансу amount и вызываем onSuccess(`Account balance: ${this.balance}`)
*/

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = function (message) {
//   console.log(`✅ Success! ${message}`);
// };

// const handleError = function (message) {
//   console.log(`❌ Error! ${message}`);
// };

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
