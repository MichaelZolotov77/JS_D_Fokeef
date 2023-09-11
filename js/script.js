'use strict';

const obj = {
  fruits: ['apple', 'orange', 'limon', 'watermelon'],
  drinks: ['juce', 'tea', 'coctail'],
};

console.log(...obj.fruits);
console.log(obj.fruits);

const str = 'Hello';
console.log(...str);

const newFruit = [...obj.fruits];

const bigArr = [...obj.fruits, ...str, 'world', ...obj.drinks];
console.log(bigArr);

function coctailMixer(drink, ing1, ing2) {
  console.log(`Вы выбрали ${drink} из ${ing1} и ${ing2}`);
}

coctailMixer('tea', ...obj.fruits); //Вы выбрали tea из apple и orange
