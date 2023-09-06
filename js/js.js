'use strict';

let header = document.querySelector('h1');
let secondHeader = document.createElement('h2');
let thirdHeader = document.createElement('h3');

secondHeader.innerHTML = 'Заголовок второго уровня';
thirdHeader.innerHTML = 'Заголовок третьего уровня';
header.before(thirdHeader);
header.append(secondHeader);
console.log(secondHeader);
