'use strict'

function fibonachi(length) {
    let arr = [0, 1]

    if (length < 1) return 'Число должно быть больше нуля'
    if (length == 1) return [0]
    if (length == 2) return arr

    for (let i = 3; i <= length; i++) {
        let nextNum = arr.at(-1) + arr.at(-2)
        arr.push(nextNum)
    }
    return arr
}

console.log(fibonachi(2))