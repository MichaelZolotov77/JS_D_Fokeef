'use strict';

const obj = {
  fruits: ['apple', 'orange', 'limon', 'watermelon'],
  drinks: ['juce', 'tea', 'coctail'],
  food: {
    soup: 'borch',
    pasta: 'spagetti',
  },
};

const { fruits, ...other } = obj;
console.log(fruits);
console.log(other);

let arr = [1, 2, 3, 4, 5, 6, 7];
const [a, b, c, ...others] = arr;
console.log(a, b, c, others);

function calc(a, b, c, ...numbers) {
  let sum = 0;
  for (let value of numbers) {
    sum += value;
  }
  console.log(a, b, c);
  console.log(sum);
}

calc(21, 3, 45, 6, 1, 2, 3);
