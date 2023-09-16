'use strict';

//функция высшего порядка
function hello(hiStr) {
  return function (name) {
    console.log(`${hiStr} ${name}`);
  };
}

const greeter = hello('Hi');
greeter('Mic');

hello('Hello')('Michael');
