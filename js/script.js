'use strict';

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

const bookTr = s7.book.bind(turkish, 1111111);
bookTr('Vika');

turkish.planes = 300;
turkish.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.btn')
  .addEventListener('click', turkish.buyPlanes.bind(turkish));
