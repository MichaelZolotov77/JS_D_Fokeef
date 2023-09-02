'use strict'

const user = {
    name: 'John',
    age: 30
}

user.name = 'Anna'
console.log(user)

user.sex = 'male'
console.log(user)

delete user.sex
console.log(user)

user['sex'] = 'male'
console.log(user)

delete user['sex']
console.log(user)

const propertyName = 'newProperty'
user[propertyName + ' 2'] = 'propertyValue'
console.log(user)
console.log(user['newProperty 2'])

const answer = prompt('Напишите слово name или age')

alert(user[answer])
