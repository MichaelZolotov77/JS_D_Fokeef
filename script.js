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

class User1 {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  calcage() {
    return 2023 - this.age;
  }
}

const valentina = new User1('Valentina', 'Popova', 92);
console.log(valentina.calcage());
