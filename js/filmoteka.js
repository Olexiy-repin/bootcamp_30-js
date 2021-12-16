'use strict';
const filmoteka = [
  {
    id: 1,
    title: 'Duna',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 10,
    actors: ['Amelia Gibson', 'Cameron Clayton', 'Viola Vasquez', 'Lula Collins', 'Victor Nichols'],
    adult: false,
  },
  {
    id: 2,
    title: 'Venom',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 8,
    actors: ['Inez Greer', 'Barry Curtis', 'Blanche Rios', 'Glen Perry', 'Logan Powers'],
    adult: true,
  },
  {
    id: 3,
    title: 'Luca',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 9,
    actors: ['Marguerite Gibbs', 'Lora Alvarez', 'Jorge Simpson', 'Thomas Hall', 'Darrell Hunter'],
    adult: false,
  },
  {
    id: 4,
    title: 'Free Guy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 6,
    actors: ['Calvin Andrews', 'Mamie Myers', 'Madge Townsend', 'Ralph Kim', 'Jorge Reese'],
    adult: false,
  },
  {
    id: 5,
    title: 'Saw',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 7,
    actors: ['Adele Marsh', 'Melvin Burgess', 'Jesus Reese', 'Harriet Moreno', 'Curtis Cox'],
    adult: true,
  },
];

//? Напишите функцию getAllTitlesOfFilms(films), которая возвращает масив со всеми названиями фильмов.
// const getAllTitlesOfFilms = function (films) {
//   const allTitlesOfFilms = [];

//   for (const film of films) {
//     allTitlesOfFilms.push(film.title);
//   }

//   return allTitlesOfFilms;
// };

// console.log(getAllTitlesOfFilms(filmoteka));

//? Напишите функцию findFilmByName(films, filmTitle), которая ищет фильм по названию.
// const findFilmByName = function (films, filmTitle) {
//   for (const film of films) {
//     if (film.title === filmTitle) {
//       return film;
//     }
//   }

//   return 'Такой фильм не найден';
// };

// console.log(findFilmByName(filmoteka, 'Venom'));
// console.log(findFilmByName(filmoteka, 'Spider-Man'));

//? Напишите функцию getAdultFilms(films), которая возврщает масив всех взрослых фильмов.

// const getAdultFilms = function (films) {
//   const adultFilms = [];

//   for (const film of films) {
//     if (film.adult) {
//       adultFilms.push(film);
//     }
//   }

//   return adultFilms;
// };

// console.log(getAdultFilms(filmoteka));

//? Напишите функцию getNotAdultFilms(films), которая возврщает масив всех фильмов без возростного ограничения.
// const getNotAdultFilms = function (films) {
//   const notAdultFilms = [];

//   for (const film of films) {
//     if (!film.adult) {
//       notAdultFilms.push(film);
//     }
//   }

//   return notAdultFilms;
// };

// console.log(getNotAdultFilms(filmoteka));
