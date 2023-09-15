'use strict';

//функция первого класса
function oneWord(str) {
  return str.replaceAll(' ', '').toLocaleLowerCase();
}

console.log(oneWord('Jdlln lkdkKKkl   dlkjf'));

//функция первого класса
function upperFirstLetter(str) {
  const [first, ...other] = str.split(' ');
  return [first[0].toUpperCase() + first.slice(1), ...other].join(' ');
}

console.log(upperFirstLetter('dkjlkj kjfpwi kdjf kjwk'));

//функция высшего порядка
function transformer(str, fn) {
  console.log(`Это оригинальная строка: ${str}`);
  console.log(`Измененная строка: ${fn(str)}`);
}

transformer('превет, я очень люблю JS', upperFirstLetter);
transformer('превет, я очень люблю JS', oneWord);
