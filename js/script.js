'use strict';

const flight = '432RTN';
const passenger = {
  name: 'Mic',
  passport: 392098863,
};

function checkIn(flightNum, passId) {
  flightNum = '111RRR';
  passId.name = 'Mr ' + passId.name;
  if (passId.passport == 392098863) {
    console.log('Вы успешно прошли регистрацию');
  } else {
    console.log('Регистрация не удалась');
  }
}

function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 1000000);
  console.log(person.passport);
}

newPassport(passenger);
checkIn(flight, passenger);
