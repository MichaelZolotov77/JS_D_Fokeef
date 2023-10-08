'use strict';

// ЗАДАЧА:

// 1.Перепешите код из прошлой практики в синтаксис классов.
// 2.Сделайте свойство charge приватным.
// 3.Сделайте так чтобы методы chargeBattery и accelerate можно было вызывать по цепочке.

class Car {
  constructor(mark, speed) {
    this.mark = mark;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
  }
  break() {
    this.speed -= 5;
    console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
  }
}

class ElectroCar extends Car {
  #charge;
  constructor(mark, speed, charge) {
    super(mark, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.mark} едет со скоростью ${this.speed} , с уровнем заряда ${
        this.#charge
      } `
    );
    return this;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const tesla = new ElectroCar('Tesla', 100, 50);
tesla.chargeBattery(95).accelerate();
console.log(tesla);
