'use strict'

let a
let b

function myFn(){
    let b
    a = true//так не делать!
    b = 5
    console.log(b)//5
}

myFn()

console.log(a)//true
console.log(b)//undefined