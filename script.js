'use strict';

function Car(name, speed) {
  this.name = name;
  this.speed = speed;
}
Car.prototype.plusSpeed = function () {
  console.log(`Авто ${this.name}, скорость ${(this.speed += 10)} км/ч`);
};

Car.prototype.minusSpeed = function () {
  console.log(`Авто ${this.name}, скорость ${(this.speed -= 5)} км/ч`);
};

const lada = new Car('Лада', 170);
const skoda = new Car('Skoda', 105);

lada.plusSpeed();
lada.plusSpeed();
lada.minusSpeed();
skoda.minusSpeed();
skoda.minusSpeed();
