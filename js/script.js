'use strict';

const airPlane = 'TAP Air Portugal';

console.log(airPlane.toLocaleLowerCase());
console.log(airPlane.toLocaleUpperCase());

const dmitry = '  dMitrIi Hello \n ';
console.log(dmitry.trim());

const priceRub = '453p';
const priceUsd =
  priceRub.slice(0, priceRub.length - 1) / 72 + priceRub.replace('p', '$');
console.log(priceUsd);

const hello = 'Привет свет';
const hello2 = 'Привет свет свет свет';
const correctStr = hello.replace('свет', 'мир');
const correctStr2 = hello2.replace('свет', 'мир');
const correctStr3 = hello2.replaceAll('свет', 'мир');
console.log(correctStr); //Привет мир
console.log(correctStr2); //Привет мир свет свет
console.log(correctStr3); //Привет мир мир мир

const flight = 's7ADR320';
console.log(flight.includes('7AD')); //true
console.log(flight.startsWith('s7')); //true
console.log(flight.endsWith('320')); //true
