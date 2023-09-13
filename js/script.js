'use strict';

const airPlane = 'TAP Air Portugal';
const plane = 'D430';

console.log(airPlane[4]); //A
console.log(airPlane.length); //16
console.log(airPlane.indexOf('A')); //1
console.log(airPlane.indexOf('Air')); //4
console.log(airPlane.lastIndexOf('A')); //4
console.log(airPlane.indexOf('q')); //-1

console.log(airPlane.slice(4)); //Air Portugal
console.log(airPlane.slice(4, 7)); //Air
console.log(airPlane.slice(0, airPlane.indexOf(' '))); //первое слово
console.log(airPlane.slice(airPlane.lastIndexOf(' ') + 1)); //последнее слово
console.log(airPlane.slice(-3)); //gal

const checkSeat = function (seat) {
  const s = seat.slice(0, 1);
  if (s == 'A') console.log('Место у окна');
  else console.log('Место не у окна');
};

checkSeat(plane); //место не у окна
