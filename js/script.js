'use strict';

const map = new Map([
  ['USD', 'Dollars'],
  ['RUB', 'Rubbles'],
  ['EUR', 'Euro'],
]);

map.forEach(function (value) {
  console.log(value);
});

map.forEach(function (value, key) {
  console.log(key);
  console.log(value);
});

map.forEach(function (value, key, map) {
  console.log(key);
  console.log(value);
  console.log(map);
});

const set = new Set(map);

set.forEach(function (value, key, set) {
  console.log(key);
  console.log(value);
  console.log(set);
});
