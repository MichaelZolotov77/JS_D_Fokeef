'use strict'

function ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    } else {
        no()
    }
}

// function showOk(){
//     alert('Спасибо за согласие')
// }

// function showCancel(){
//     alert('Вы отменили выполнение')
// }

// ask('Вы согласны?', showOk, showCancel)

ask('Вы согласны?', () => alert('Спасибо за согласие'), () => alert('Вы отменили выполнение'))