'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//нажатие на кнопку проверка
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //если не ввели число
  if (!guess) {
    displayMessage('Вы не ввели число');
    //если угадали
  } else if (guess === secretNumber) {
    displayMessage('Вы победили!');
    document.querySelector('body').style.background = 'green';
    document.querySelector('.number').textContent = guess;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //если не угадали
  } else if (guess !== secretNumber) {
    if (score > 1) {
      if (guess > secretNumber) {
        displayMessage('Число больше');
        score--;
        document.querySelector('.score').textContent = score;
      } else if (guess < secretNumber) {
        displayMessage('Число меньше');
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      displayMessage('Вы проиграли');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//нажатие на кнопку снова
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Начните угадывать...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = 'black';
});
