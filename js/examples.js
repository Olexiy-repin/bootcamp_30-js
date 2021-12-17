'use strict';
/*
? Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.
*/

// function calcBMI({ weight, height }) {
//   const numericWeight = Number.parseFloat(weight.replace(',', '.'));
//   const numericHeight = Number.parseFloat(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// Было
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );

/*
? Перепиши функцию так, чтобы она принимала один объект параметров,
? вместо набора независимых аргументов.
*/

// const printContactsInfo = function ({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// };

// // Было
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300'
// // );

// // Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/*
? Перепиши функцию так, чтобы она принимала один объект параметров,
? вместо набора независимых аргументов.
*/

// function getBotReport(params) {
//   const {
//     companyName,
//     bots: { repair: repairBots, defence: defenceBots },
//   } = params;

//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Ожидается
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

/*
? Напиши функцию getStockReport(companyName, stock), чтобы она принимала объект параметров со свойствами companyName и stock и выводила репорт
? о количестве товаров на складе любой компании.
*/

// function getStockReport({ companyName, stock }) {
//   const stockValues = Object.values(stock);
//   let total = 0;

//   for (const value of stockValues) {
//     total += value;
//   }

//   return `${companyName} has ${total} bots in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); //"Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

/*
? Напиши функцию createContact(partialContact) так,
? чтобы она возвращала новый объект контакта с добавленными свойствами id и createdAt,
? а также list со значением "default" если в partialContact нет такого свойства.
*/

// const obj = {
//   a: 1,
//   b: 2,
// };

// const obj1 = {
//   c: 3,
//   a: 10,
//   ...obj,
// };

// console.log('obj: ', obj);
// console.log('obj1: ', obj1);

// const generateId = function () {
//   return '_' + Math.random().toString(36).substr(2, 9);
// };

// const createContact = function (partialContact) {
//   return {
//     id: generateId(),
//     createdAt: new Date(),
//     list: 'default',
//     ...partialContact,
//   };
// };

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

/*
? Напиши функцию transformUsername(user) так, чтобы она возвращала новый обьект со свойством fullName, вместо firstName и lastName.
*/

// const transformUsername = function (user) {
//   const { firstName, lastName, ...otherProps } = user;

//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// };

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );
