'use strict'

//Function declaration
function calc(a, b, c) {
    return a + b - c
}
const result = calc(10, 4, 2)

console.log(result)

//Function expression(Функциональное выражение)
let result2 = function (a, b, c) {
    return a + b - c
}

console.log(result2(10, 6, 5))