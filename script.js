'use strict';

class Account {
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log('Вы создали аккаунт');
  }
  sayHi() {
    console.log('Hello world');
  }
  #changePin(password) {
    this.#pin = password;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  getMov() {
    console.log(this.#movements);
  }
}

const ivan = new Account('Ivan', 'RUB', 1111);
ivan.deposit(300).deposit(200).withdraw(100).getMov();
