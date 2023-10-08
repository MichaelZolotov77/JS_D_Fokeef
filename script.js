'use strict';

class Account {
  _movements = [];
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    console.log('Вы создали аккаунт');
  }
  sayHi() {
    console.log('Hello world');
  }
  changePin(password) {
    this._pin = password;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  getMov() {
    return this._movements;
  }
}

const ivan = new Account('Ivan', 'RUB', 1111);
console.log(ivan.changePin(2222));
console.log(ivan);
ivan.deposit(500);
ivan.withdraw(200);
console.log(ivan);
console.log(ivan.getMov());
