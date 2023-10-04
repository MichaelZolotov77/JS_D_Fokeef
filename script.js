'use strict';

class Car {
  constructor(mark, speed) {
    this.mark = mark;
    this.speed = speed;
    this.speedUs;
  }

  get speed() {
    return this.speedUs * 1.6;
  }

  set speed(val) {
    this.speedUs = val / 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Авто ${this.mark}, скорость ${this.speed} км/ч`);
  }

  break() {
    this.speed -= 5;
    console.log(`Авто ${this.mark}, скорость ${this.speed} км/ч`);
  }
}

const lada = new Car('Lada', 100);
lada.accelerate();
console.log(lada);
