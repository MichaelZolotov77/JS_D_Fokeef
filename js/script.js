'use strict';

const user = {
  name: 'John',
  age: 30,
  calcAge: function () {
    // Первый способ через создание переменной
    // const self = this;
    // console.log(this);
    // function newFn() {
    //   console.log(self);
    // }

    // Второй способ через стрелочную функцию
    const newFn = () => {
      console.log(this);
    };
    newFn();
  },
};

user.calcAge();

// function calcAge() {
//   console.log(this);
// }

// calcAge();

// const myFn = () => {
//   console.log(this);
// };

// myFn();

// document.querySelector('h1').addEventListener('click', function () {
//   this.style.color = 'red';
//   console.log(this);
// });

// document.querySelector('h1').addEventListener('click', () => {
//   //this.style.color = 'red';
//   console.log(this);
// });
