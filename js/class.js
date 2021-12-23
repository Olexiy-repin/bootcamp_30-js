'use strict';
/*
 * Классы: объявление, конструктор, методы
 * Приватные свойства и методы
 * Статические свойства и методы
 * Геттеры и сеттеры
 */

class Human {
  #email;

  constructor({ firstName = 'Bob', lastName, age, hairColor, eyesColor } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.legs = 2;
    this.hands = 2;
    this.eyes = 2;
    this.hairColor = hairColor;
    this.eyesColor = eyesColor;
    this.#email = 'saw@bizjowku.io';
  }

  changeHairColor(newColor) {
    this.hairColor = newColor;
  }

  get userEmail() {
    return this.#email;
  }

  set userEmail(newEmail) {
    this.#email = newEmail;
  }
}

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

// person.userEmail = 'ab@eme.co.uk';
// console.log(person.userEmail);

person.userEmail = 'huparciw@jotipvoj.np';
console.log(person.userEmail);

console.log(person);
console.log(person2);
