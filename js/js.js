'use strict';

let header = document.querySelector('.header');

console.log(header.firstChild);

let navList = document.querySelector('.nav__list');

console.log(navList.childNodes);

let className = document.getElementsByClassName('nav__item');

console.log(className);

let tagName = document.getElementsByTagName('ul');

let child = document.querySelector('h2');
console.log(child.childNodes);
