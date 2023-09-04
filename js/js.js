'use strict';

let navItems = document.querySelectorAll('li');

let arr = [1, 2, 3, 4, 5];

console.log(navItems); //Prototype : NodeList

console.log(arr); //Prototype : Array

let arr2 = Array.from(navItems); //превращение в обычный массив

arr2.pop(); //работает

console.log(arr2);
