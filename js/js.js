'use strict'

const user = {
    name: 'John',
    age: 30,
    placeOfBirth: {
        country: 'Russia',
        city: 'Kazan'
    }
}

console.log(user)

user.placeOfBirth.country = 'USA'
console.log(user)

user.placeOfBirth['dateOfBirth'] = 1992
console.log(user)

delete user['placeOfBirth'].city
console.log(user)

