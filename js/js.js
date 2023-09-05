'use strict';

let elem = document.querySelector('h1');

console.log(elem.innerHTML);

let oldData = elem.innerHTML;

elem.innerHTML = `<p>${oldData}</p><p>Привет всем! Это новый текст</p>`;

console.log(elem.innerHTML);

//выводит просто текст
//elem.textContent = `<p>${oldData}</p><p>Привет всем! Это новый текст</p>`;
