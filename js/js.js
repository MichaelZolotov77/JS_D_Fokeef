'use strict';

let li = document.querySelector('li');

let styleOfLi = getComputedStyle(li, '::before');

console.log(styleOfLi);
