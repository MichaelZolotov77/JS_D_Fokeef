'use strict';

console.log(Number('1234')); // Преобразование в числа
console.log(+'1234');
console.log(+true); //1
console.log(+false); //0
console.log(Number.parseInt('12px')); //12
console.log(Number.parseInt('12.557px')); //12, не работает с дробными числами
console.log(Number.parseFloat('12.557px')); //12.557

console.log(Math.max(10, 5, 7)); //10
console.log(Math.min(10, 15, 17)); //10

// В JavaScript нет функции генерации случайных чисел в диапазоне
// Такую функцию пишут вручную
function calcRandom(min, max) {
  return Math.trunc(Math.random() * (max - min) + 1) + min;
}

console.log(calcRandom(10, 20));

console.log(Math.round(2.5)); //3, округление до ближайшего целого
console.log(Math.ceil(2.1)); //3, округление в большую сторону
console.log(Math.floor(2.9)); //2, округление в меньшую сторону
console.log(+(2.345664).toFixed(2)); //2.34 Возвращает строку!
// Если хотим вернуть число, поставить плюс впереди числа (или Number)
