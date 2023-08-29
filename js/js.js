//сравнения

console.log('2' > 1)//true, строка преобразуется в число

console.log('01' == 1)//true

console.log('Я' > 'А')//true, строки сравниваются посимвольно

console.log('а' > 'Я')//true, строчные буквы имеют больший приоретет

console.log(true > false)//true

console.log('Hello10' > 5)//false, 'Hello10' конвертируется в NaN

console.log(undefined == 0)//false, undefined конвертируется в NaN, NaN всегда выдает false

console.log(undefined == null)//true, конвертации нет

console.log(undefined === null)//false, плюс сравнение типов, типы разные

console.log('10' === 10)//false
