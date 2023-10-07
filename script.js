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

class Manager extends Employee {
  constructor(firstName, lastName, age, post, password) {
    super(firstName, lastName, age, post);
    this.password = password;
  }
  sayHello() {
    console.log('Привет, я метод менеджера');
  }
}

const manager = new Manager('Irina', 'Petrova', 33, 'manager', 'pass');
console.log(manager);
manager.calcBirth();
manager.sayHello();
