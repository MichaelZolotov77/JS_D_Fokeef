'use strict';

class Account {
  movements = [];
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    console.log('Вы создали аккаунт');
  }
  sayHi() {
    console.log('Hello world');
  }
}

const ivan = new Account('Ivan', 'RUB', 1111);
console.log(ivan);
