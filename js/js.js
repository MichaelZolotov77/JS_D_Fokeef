'use strict';

const elem = document.querySelector('.box_1');

console.dir(elem);

elem.addEventListener('mouseenter', function () {
  elem.classList.add('newStyle');
});

elem.addEventListener('click', () => elem.classList.add('newStyle2'));
