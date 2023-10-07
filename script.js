'use strict';

function Employee(firstName, lastName, age, post) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.post = post;
}

Employee.prototype.calcBirth = function () {
  console.log(new Date().getFullYear() - this.age);
};

const cashier = new Employee('Ivan', 'Avdeev', 26, 'cashier');
console.log(cashier);
cashier.calcBirth();

/////////////

function Manager(firstName, lastName, age, post, password) {
  Employee.call(this, firstName, lastName, age, post);
  this.password = password;
}

Manager.prototype = Object.create(Employee.prototype);

// Новый метод создается после создания прототипа
Manager.prototype.sayHello = function () {
  console.log('Привет, я метод менеджера');
};

const manager = new Manager('Irina', 'Petrova', 33, 'manager', 'pass');
manager.calcBirth();
console.log(manager);
manager.sayHello();
