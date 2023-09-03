'use strict'

const obj = {
    name: 'John',
    age: 30,
}

const obj2 = Object.assign({}, obj)

obj2.age = 60

console.log(obj)
console.log(obj2)

const obj3 = {...obj}//оператор разделения объекта на свойства
obj3.name = 'Mic'

console.log(obj)
console.log(obj3)

const obj4 = {
    name: 'John',
    age: 30,
    someObj: {
        city: 'Moscow'
    }
}

//конвертация объекта в формат JSON и обратно
const obj5 = JSON.parse(JSON.stringify(obj4))

obj5.someObj.city = 'New York'

console.log(obj4)
console.log(obj5)