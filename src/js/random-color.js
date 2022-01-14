export const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

export const sum = (a, b) => a + b;
// export default function randomColor() {
//   return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
// }
