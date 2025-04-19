// 2.Mostrar por consola los primeros 10 números pares
const tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstNumbersPairs = tenNumbers.filter((number) => number % 2 === 0);
console.log(firstNumbersPairs);