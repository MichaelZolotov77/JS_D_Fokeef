'use strict';

///////////////////////
/* 
ЗАДАЧА:
Создайте функционал для открытия модальных окон.


ПОДСКАЗКА:
1-Не забывайте про свойство classList с помощью которого можно манипулировать классами HTML элементов
2-При добавлении класса .hidden к любому элементу, он исчезнет, при удалении этого класса, он появится
3-Не забудьте про то, что закрыть модальное окно можно как с помощью кнопки-крестика, в верхнем правом углу модального окна, так и с помощью нажатия на любое место "Оверлей"
*/

const buttons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for (let value of buttons) {
  value.addEventListener('click', tuggleHidden);
}

function tuggleHidden() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

closeModal.addEventListener('click', tuggleHidden);

overlay.addEventListener('click', tuggleHidden);

document.addEventListener('keydown', function (event) {
  if (event.key == 'Escape' && !modal.classList.contains('hidden')) {
    tuggleHidden();
  }
});

// document.addEventListener('keydown', function (event) {
//   if (event.key == 'Escape') {
//     tuggleHidden();
//   }
// });
