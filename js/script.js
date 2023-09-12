'use strict';

const hotel = new Map();

hotel.set('categories', ['std', 'eco', 'suit', 'lux']);
hotel.set(true, 'Мы открыты');
hotel.set(false, 'Мы закрыты');
const arr = [2, 3];
hotel.set(arr, 'Это массив');
console.log(hotel);
console.log(hotel.get(true));
console.log(hotel.get(arr));
hotel.delete(arr);
console.log(hotel);
