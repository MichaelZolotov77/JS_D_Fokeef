'use strict';

let header = document.querySelector('h1');

header.insertAdjacentHTML('afterbegin', '<p>Afterbegin</p>');
header.insertAdjacentHTML('beforebegin', '<p>Beforebegin</p>');
header.insertAdjacentHTML('beforeend', '<p>Beforeend</p>');
header.insertAdjacentHTML('afterend', '<p>Afterend</p>');
