'use strict';

class Employee {
  constructor(firstName, lastName, age, post) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.post = post;
  }
  calcBirth() {
    console.log(new Date().getFullYear() - this.age);
  }
}

/////////////

// Если не меняется конструктор, то его можно не объявлять
class Manager extends Employee {
  sayHello() {
    console.log('Привет, я метод менеджера');
  }
}

const manager = new Manager('Irina', 'Petrova', 33, 'manager', 'pass');
console.log(manager);
manager.calcBirth();
manager.sayHello();
