'use strict';

/*
 *  Контекст вызова this
 */

/*
 * this существует только фнутри функций.
 * На контекст не влияет то где функция была //!ОБЪЯВЛЕНА.
 * На контекст влияет то где функция //!ВЫЗЫВАЕТСЯ.
 */

//TODO: Расмотрим как this ведёт себя в методах
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     // this = user;
//     console.log('this ---->', this);
//   },

//   showName() {
//     // this = user;
//     console.log(this.name);
//   },
// };

// user.showThis();
// user.showName();

// const anotherUser = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     // this = anotherUser;
//     console.log('this ---->', this);
//   },

//   showName() {
//     // this = anotherUser;
//     console.log(this.name);
//   },
// };

// anotherUser.showThis();
// anotherUser.showName();

//TODO: Расмотрим как this ведёт себя в обычных функциях (строгий, не строгий режим)
//? Function expression
// const fn = function () {
//   console.log(`this ---->`, this);
// };

// fn();

//? Function declaration
// function fn() {
//   console.log(`this ---->`, this);
// }

// fn();

//? Arrow function
// const fn = () => {
//   console.log(`this ---->`, this);
// };

// fn();

//TODO: Присвоение функции как метода объекта
// const user = {
//   name: 'Luis',
//   age: 30,
// };

// const anotherUser = {
//   name: 'Jeremy',
//   age: 20,
// };

// const showThis = function () {
//   console.log(`this ---->`, this);
// };

// const showThisName = function () {
//   console.log(`this name is: ${this.name}`);
// };

// user.showThis = showThis;
// user.showThisName = showThisName;

// user.showThis();
// user.showThisName();

// anotherUser.showThis = showThis;
// anotherUser.showThisName = showThisName;

// anotherUser.showThis();
// anotherUser.showThisName();

//TODO: Вызов метода объекта без контекста
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const showUserThis = user.showThis;
// const showUserName = user.showName;

// showUserThis();
// showUserName();

//TODO: This в callback функциях
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback) {
//   // callback = user.showThis;

//   callback();
// };

// someFunction(user.showThis);

//TODO: This в стрелочных функциях. Стрелочные функции не имеют своего this, this в стрелках всегда ссылается на родительский this.
// const user = {
//   name: 'Luis',
//   age: 30,

//   changeAge: newAge => {
//     console.log(`this ---->`, this);

//     this.age = newAge;
//   },
// };

// user.changeAge(40);
// console.log(user);

// const user = {
//   name: 'Luis',
//   age: 30,

//   changeAge(newAge) {
//     console.log(`this ---->`, this);

//     const someFn = () => {
//       console.log(`this ---->`, this);
//       this.age = newAge;
//     };

//     someFn();
//   },
// };

// user.changeAge(40);
// console.log(user);

/*
? Каким будет результат выполнения этого кода?
*/

// let user = {
//   name: 'Джон',

//   go() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// const goFn = user.go;

// goFn();

/*
? Здесь функция makeUser возвращает объект.
? Каким будет результат при обращении к свойству объекта ref? Почему?
*/

// const makeUser = function () {
//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();

// console.log(user);
// console.log(user.ref.name);

/*
? Каким будет результат console.log
*/

// function makeUser() {
//   return {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user.ref().name);

/*
? Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
*/

// const ladder = {
//   step: 0,

//   up() {
//     this.step += 1;
//     return this;
//   },

//   down() {
//     this.step -= 1;
//     return this;
//   },

//   showStep() {
//     console.log(this.step);
//     return this;
//   },
// };

// // Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep();

// // Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep();
