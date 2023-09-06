'use strict';

let header = document.querySelector('h1');
let secondHeader = document.createElement('h2');

secondHeader.innerHTML = 'Заголовок второго уровня';

header.insertAdjacentHTML('afterbegin', '<p>Some text</p>');
