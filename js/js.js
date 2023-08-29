x = '1'

console.log(typeof x)//string

x = Number(x)

console.log(typeof x)//number

x = ''

x = Boolean(x)

console.log(x)//false

x = '100'

console.log(typeof +x)//number - унарный плюс преобразует строку в число
