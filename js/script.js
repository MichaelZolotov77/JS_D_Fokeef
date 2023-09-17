'use strict';

const arr1 = ['a', 'b', 'c'];

for (let value of arr1) {
  console.log(value);
}

arr1.forEach(function (value) {
  console.log(value);
});

arr1.forEach(function (value, key) {
  console.log(`Ключ: ${key} Значение: ${value}`);
});

//костыли, чтобы добраться до ключа массива
for (let [key, value] of arr1.entries()) {
  console.log(`Ключ: ${key} Значение: ${value}`);
}

arr1.forEach(function (value, key, arr) {
  console.log(`Ключ: ${key} Значение: ${value} в массиве ${arr}`);
});
