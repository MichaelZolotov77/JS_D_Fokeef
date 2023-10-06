'use strict';

const newProto = {
  calcBirth() {
    console.log(2023 - this.age);
  },

  init(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  },
};

const ivan = Object.create(newProto);
ivan.init('Ivan', 35);

console.log(ivan);
ivan.calcBirth();
