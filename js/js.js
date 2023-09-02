'use strict'

const firstName = 'John'
const lastName = 'Lennon'

const user = {
    firstName,
    lastName,
    birthYear: 1940,
    calcAge: function() {
        return 2023 - user.birthYear
    }
}

console.log(user.calcAge())


