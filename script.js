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
