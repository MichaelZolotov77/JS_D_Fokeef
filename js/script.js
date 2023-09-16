'use strict';

// function person() {
//   console.log(this.firstName + ' ' + this.lastName);
// }

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  person: function () {
    console.log(this.firstName + ' ' + this.lastName);
  },
};

const person2 = {
  firstName: 'Mary',
  lastName: 'Doe',
};

person1.person.call(person2);
