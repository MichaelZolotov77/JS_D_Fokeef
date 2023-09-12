'use strict';

const names = new Array(
  'Дмитрий',
  'Иван',
  'Виктор',
  'Анастасия',
  'Игорь',
  'Дмитрий',
  'Иван',
  'Анастасия'
);

const uniqNames = new Set(names);
uniqNames.delete('Дмитрий');
console.log(...uniqNames);

const updateNames = Array.from(uniqNames);
console.log(updateNames);

const name = 'Dmitrii';
const uniqLetters = new Set(name);
console.log(uniqLetters);

for (let value of uniqLetters) {
  console.log(value);
}
