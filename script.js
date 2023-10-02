'use strict';

function User(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
}
User.prototype.calcage = function () {
  return 2023 - this.age;
};

const ivan = new User('Ivan', 'Ivanov', 46);
console.log(ivan);
console.log(ivan.calcage());

const arr = [];
console.log(arr);

Array.prototype.uniq = function () {
  return [...new Set(this)];
};

const arr1 = [2, 2, 2, 3, 3, 4, 4, 4];
console.log(arr1.uniq());
