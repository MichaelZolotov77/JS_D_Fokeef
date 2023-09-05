'use strict';

let arr = ['hello', 2, true, 4];

for (let value of arr) {
  console.log(value); //получаем значения
}

let obj = {
  name: 'John',
  lastName: 'Travolta',
  age: 30,
};

for (let key in obj) {
  console.log(key); //получаем ключи
}

for (let key in obj) {
  console.log(obj[key]); //получаем значения
}

let arr2 = document.querySelectorAll('li');

console.log(arr2);

for (let key in arr2) {
  console.log(arr2[key]); //такой метод перебора для псевдомассивов не подходит
}

for (let value of arr2) {
  console.log(value); //получаем значения псевдомассива
}
