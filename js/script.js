'use strict';

const nowDate = new Date();
console.log(nowDate); // Текущая дата

const date = new Date('Dec 6 2025 17:34:50'); // Можно написать строкой
console.log(date);

const date1 = new Date(2025, 5, 10, 17, 34, 45, 700); // Можно в виде параметров, 5 месяц июнь, счет месяцев с 0
console.log(date1);

// Получение элементов даты
console.log(date1.getFullYear()); //2025
console.log(date1.getMonth()); //5
console.log(date1.getDate()); //10
console.log(date1.getDay()); //2 - вторник
console.log(date1.getHours()); //17
console.log(date1.getMinutes()); //34
console.log(date1.getSeconds()); //45
console.log(date1.getMilliseconds()); //700

date1.setFullYear(2030);
console.log(date1.getFullYear()); //2030

console.log(date1.getTime()); //1907332485700

const dateByMilliseconds = new Date(1907332485700);
console.log(dateByMilliseconds); //Mon Jun 10 2030 17:34:45 GMT+0300 (GMT+03:00)
console.log(dateByMilliseconds.toISOString()); //2030-06-10T14:34:45.700Z
