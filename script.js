'use strict';

class User {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  calcage() {
    return 2023 - this.age;
  }
  get birthYear() {
    return new Date().getFullYear() - this.age;
  }
}

const valentina = new User('Valentina', 'Popova', 92);
console.log(valentina);
console.log(valentina.calcage());
console.log(valentina.birthYear);
