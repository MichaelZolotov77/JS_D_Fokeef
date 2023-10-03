'use strict';

class User {
  constructor(firstname, lastname, birthYear) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age;
    this.birthYear = birthYear;
  }
  get birthYear() {
    return new Date().getFullYear() - this.age;
  }
  set birthYear(val) {
    const year = '' + val;
    if (year.length < 4) {
      alert('Вы ввели меньше 4-х символов');
      return;
    }
    this.age = new Date().getFullYear() - year;
  }
}

const anna = new User('Anna', 'Filimonova', 1990);
console.log(anna);

///////////////////////

class User1 {
  constructor(fullName) {
    this.firstName;
    this.lastName;
    this.fullName = fullName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(val) {
    if (val.length < 3) {
      alert('Короткое имя');
      return;
    }
    const name = val.split(' ');
    this.firstName = name[0];
    this.lastName = name[1];
  }
}

const anna1 = new User1('Anna Filimonova');
console.log(anna1);
