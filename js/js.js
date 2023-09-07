'use strict';

let header = document.querySelector('h1');

let styleOfHeader = getComputedStyle(header);

console.log(styleOfHeader.marginBottom);

parseInt(styleOfHeader.marginBottom);

console.log(parseInt(styleOfHeader.marginBottom));
