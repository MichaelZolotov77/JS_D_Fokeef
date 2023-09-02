'use strict'

const firstName = 'John'
const lastName = 'Lennon'

// function calcAge() {
//     return 2023 - user.birthYear
// }

const user = {
    firstName,
    lastName,
    birthYear: 1940,
    calcAge() {
        return 2023 - user.birthYear
    }
}

console.log(user.calcAge())


