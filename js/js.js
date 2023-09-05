'use strict';

let elem = document.querySelector('h1');

let oldData = elem.innerHTML;

elem.outerHTML = `<p>Привет всем! Это новый текст</p>`;

console.log(elem.firstChild); //комментарий

elem.firstChild.data = 'новый комментарий';

console.dir(elem);
