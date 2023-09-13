'use strict';

const hotel = new Map([
  ['categories', ['std', 'eco', 'suit', 'lux']],
  [true, 'Мы открыты'],
  [false, 'Мы закрыты'],
]);
console.log(hotel);
console.log(hotel.get(false)); //мы закрыты

for (let [key, value] of hotel) {
  console.log(`Ключ: ${key}, Значение: ${value}`);
}

const obj = {
  name: 'John',
  lastName: 'Travolta',
  age: 30,
};

//итерируемые объекты это строки, массивы, псевдомассивы, Map, Set
//все итерируемые объекты можно перебирать в цикле for of, конвертировать
//один в другой, также использовать операторы spred и rest

//конвертация объекта в массив
const arrFromObj = Object.entries(obj);
console.log(arrFromObj);

//конвертация специального массива в объект
const objFromArr = Object.fromEntries(arrFromObj);
console.log(objFromArr);

//конвертация объекта в Map
const mapFromObj = new Map(Object.entries(obj)); //передается массив
console.log(mapFromObj);

//конвертация Map в Set, также из строки, и массива
const setFromMap = new Set(hotel);
console.log(setFromMap);

//конвертация Map в массив
const arrFromMap = Array.from(hotel);
console.log(arrFromMap);
