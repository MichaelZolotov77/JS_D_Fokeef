'use strict';

const elem = document.querySelector('.box_1');

console.dir(elem);

elem.addEventListener('click', function () {
  elem.style.backgroundColor = 'red';
  elem.nextElementSibling.after(elem);
});
