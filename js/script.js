'use strict';

function person(greetStr) {
  console.log(greetStr + ' ' + this.firstName + ' ' + this.lastName);
}

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

const person2 = {
  firstName: 'Mary',
  lastName: 'Doe',
};

person.call(person1, 'Good morning,');

const s7 = {
  airLine: 's7',
  iCode: 'S7',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} забронировал место на самолет компании ${this.airLine}, номер рейса ${this.iCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iCode}${flightNum}`, name });
  },
};

s7.book(2131, 'Mikhail');
s7.book(5467, 'Dmitrii');

const book = s7.book;

const turkish = {
  airLine: 'tr',
  iCode: 'TR',
  booking: [],
};

book.call(turkish, 1122, 'Ivan');
console.log(turkish.booking);
