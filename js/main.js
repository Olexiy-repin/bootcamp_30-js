'use strict';
/*
 * Создание объекта (конструктор, литерал).
 * Свойства, ключи (имя) и значения
 */

// Сущность фильм (название, описание, рейтинг, актёрский состав, возрастное ограничение)
// const film = {
//   title: 'Незнайка на луне',
//   description: 'Lorem ipsum dolor sitoptio quae unde saepe est dolore.',
//   rating: 10,
//   actors: ['Eliza', 'Douglas', 'Blanche', 'Moore'],
//   isAdult: true,
//   preview: './images/neznaika1.jpg',
// };

/*
 * Доступ к свойствам(obj.key, obj[key]).
 * Добавление и изминение свойств
 */

// film['isAdult'] = false;
// film.actors.push('Gordon');
// film.preview = './images/neznaika2.jpg';
// film.preview = './images/neznaika3.jpg';

// console.log(film);
/*
 * Короткая запись свойств
 */

/* <input type="text"> */
/* <input type="email"> */
// const username = 'Oleksii';
// const email = 'test@gmail.com';

// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

// const firstName = prompt('Введите ваше имя');
// const email = prompt('Ваш email');

// const user = {
//   firstName,
//   email,
// };

// console.log(user);

/*
 * Ссылочный тип
 */

// const user = {
//   firstName: 'Oleksii',
// };

// const user2 = user;

// console.log('user: ', user);
// console.log('user2: ', user2);

// user2.lastName = 'Repin';

// console.log('user: ', user);
// console.log('user2: ', user2);

/*
 * Все в этом мире объекты
 */

// const numbers = [1, 2, 3, 4];

// numbers.hi = 'Hello';

// console.log(numbers.hi);

// console.log(numbers);

// function foo() {
//   console.log('Hello');
// }

// foo.hi = 'Hello';

// console.dir(foo.hi);

// console.dir(foo);
