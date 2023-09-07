'use strict';

let header = document.querySelector('h1');
let ul = document.querySelector('ul');

let ulClone = ul.cloneNode(true);

header.prepend(ulClone);
