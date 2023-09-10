'use strict';

const arr = [
  'apple',
  'orange',
  'limon',
  'watermelon',
  'juse',
  'tea',
  'coctail',
];

let [fruitOne, fruitTwo, fruitThree] = arr;
console.log(fruitOne);
console.log(fruitTwo);

let a = fruitOne;
fruitOne = fruitTwo;
fruitTwo = a;
console.log(fruitOne);
console.log(fruitTwo);

[fruitOne, fruitTwo] = [fruitTwo, fruitOne];
console.log(fruitOne);
console.log(fruitTwo);

function coctailMixer([fruit1, fruit2, , , , drink]) {
  console.log(`Вы приготовили ${fruit1} + ${fruit2} ${drink}`);
}

coctailMixer(arr);
