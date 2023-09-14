'use strict';

const newNames = 'dima vika ivan maria dmitriy';
const arrFromStr = newNames.split(' ');
console.log(arrFromStr);
const strFromArray = arrFromStr.join(' ');
console.log(strFromArray);

function capitalName(strNames) {
  const arrNames = strNames.split(' ');
  const newUpperNames = [];

  for (let n of arrNames) {
    newUpperNames.push(n[0].toLocaleUpperCase() + n.slice(1));
  }
  console.log(newUpperNames.join(' ')); //Dima Vika Ivan Maria Dmitriy
}

capitalName(newNames);

const cardNumber = 2202 + '';
console.log(cardNumber.padStart(16, '*'));
console.log(cardNumber.padEnd(16, '*'));

const hello = 'Hello world ';
console.log(hello.repeat(5));
