/*
 * Операторы сравнения (<, >, <=, >=, ==, ===, !=, !==)
 */

/*
 * Результатом сравнения будет буливое значение.
 * Строки сравниваются по unicode.
 * При сравнении строк, строки сравниваются посимвольно.
 * При сравнении разных типов, операнды приводятся к числу.
 * null не равен ничему кроме себя и undefined.
 * undefined не равен ничему кроме себя и null.
 */

/*
 * Приведение различных типов к числу:

 * true --> 1
 * false --> 0
 * '' --> 0
 * null --> 0
 * undefined --> 0
 */

//* Оператор меньше (<)
// console.log(2 < 12);
// console.log(12 < 2);
// console.log('a' < 'b');
// console.log('b' < 'a');
// console.log('A' < 'a');
// console.log('apple' < 'bananana');
// console.log('bananana' < 'apple');
// console.log(true < false);
// console.log(false < true);

//* Оператор больше (>)
// console.log(10 > 20);
// console.log(20 > 10);

//* Оператор меньше или равно (<=)
// console.log(5 <= 6);
// console.log(5 <= 5);
// console.log(5 <= 4);

//* Оператор больше или равно (>=)
// console.log(5 >= 3);
// console.log(5 >= 5);
// console.log(3 >= 4);

//* Не строгое равно (==)
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log('123' == 123);
// console.log(true == '1');
// console.log(4 == 5);

//* Строгое равно (===)
// console.log('7' === 7);
// console.log(null === null);
// console.log(2 + 2 === 4);
// console.log(0 === -0);

//* Не равно (!=)
// console.log(4 != 3);
// console.log('4' != 4);

//* Строго не равно (!==)
// console.log('4' !== 4);
