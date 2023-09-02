'use strict'

const firstName = 'John'
const lastName = 'Lennon'

function calcAge() {
    return 2023 - this.birthYear
}

const userFirst = {
    firstName,
    lastName,
    birthYear: 1940,
    calcAge
}

const userSecond = {
    firstName,
    lastName,
    birthYear: 1980,
    calcAge
}


console.log(userFirst.calcAge())
console.log(userSecond.calcAge())


