'use strict';

const ul = document.querySelector('ul');

const qeAll = document.querySelectorAll('li');
const getElemByAll = document.getElementsByTagName('li');

console.log(qeAll);
console.log(getElemByAll);

const newLi = document.createElement('li');
newLi.innerText = 'New elem menu 4';
ul.append(newLi);

console.log(qeAll);
console.log(getElemByAll);

for (let i = 0; i < getElemByAll.length; i++) {
  getElemByAll[i].style.color = 'green';
}
for (let i = 0; i < qeAll.length; i++) {
  qeAll[i].style.color = 'red';
}
