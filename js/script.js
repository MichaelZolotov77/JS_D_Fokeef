'use strict';

function person() {
  console.log(this.firstName + ' ' + this.lastName);
}

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  person: person,
};

const person2 = {
  firstName: 'Mary',
  lastName: 'Doe',
  person: person,
};

person1.person();
person2.person();
