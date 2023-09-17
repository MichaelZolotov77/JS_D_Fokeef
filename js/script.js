'use strict';

const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['f', 'g'];

console.log(arr1.slice(2, 4));
console.log(arr1); //не изменился

// arr2 = arr1.slice(0); //копия
// arr3 = [...arr1]; //тоже копия

console.log(arr1.reverse());
console.log(arr1); //revers меняет исходный массив

console.log(arr1.concat(arr2)); //делает копии, исходные массивы сохраняются
// console.log([...arr1, ...arr2]);//тоже самое
