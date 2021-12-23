'use strict';
/*
 * Класс - шаблон по которому будут созданны однотипные объекты
 * Экземпляр - это объект созданный по классу
 * Интерфейс - набор доступных методов и свойств
 */

//? Функция конструктор

//TODO:  Создаем человека по образу
const Human = function ({ firstName = 'Bob', lastName, age, hairColor, eyesColor } = {}) {
  //   const { firstName, lastName, age, hairColor, eyesColor } = params;
  // this = {}
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.legs = 2;
  this.hands = 2;
  this.eyes = 2;
  this.hairColor = hairColor;
  this.eyesColor = eyesColor;
  // return this;

  // [[Prototype]] ---> Human.prototype
};

Human.prototype.changeHairColor = function (newColor) {
  this.hairColor = newColor;
};

Human.prototype.getFirstName = function () {
  return this.firstName;
};

const person = new Human({
  firstName: 'Gilbert',
  lastName: 'Bennett',
  age: 30,
  hairColor: 'brown',
  eyesColor: 'brown',
});

const person2 = new Human({
  firstName: 'Michael',
  lastName: 'Gill',
  age: 20,
  legs: 2,
  hands: 2,
  eyes: 2,
  hairColor: 'white',
  eyesColor: 'blue',
});

console.log(person);
console.log(person2);

// person.changeHairColor('black');
// console.log(person.getFirstName());
// console.log(person2.getFirstName());

// const person1 = {
//   firstName: 'Edward',
//   lastName: 'Smith',
//   age: 30,
//   legs: 2,
//   hands: 2,
//   eyes: 2,
//   hairColor: 'brown',
//   eyesColor: 'brown',
// };

// const person2 = {
//   firstName: 'Michael',
//   lastName: 'Gill',
//   age: 20,
//   legs: 2,
//   hands: 2,
//   eyes: 2,
//   hairColor: 'white',
//   eyesColor: 'blue',
// };

//? Создаем методы для наших экземпляров
