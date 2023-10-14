'use strict';

console.log('Test start');

setTimeout(function () {
  console.log('0 sec timer');
}, 0);

Promise.resolve('Resolved promose 1').then(function (res) {
  for (let i = 0; i < 2000000000; i++) {}
  console.log(res);
});

Promise.resolve('Resolved promose 2').then(function (res) {
  console.log(res);
});

console.log('Test end');
