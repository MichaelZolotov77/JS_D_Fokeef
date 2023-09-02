'use strict'

/* 

ЗАДАЧА:

1. - Вам нужно создать калькулятор индекса массы тела(BMI), с помощью объектов. 
2. - Индекс массы тела рассчитывается по формуле: вес в Кг / Рост в квадрате.

Например, масса человека = 74 кг, рост = 172 см. Следовательно, индекс массы тела в этом случае равен:
ИМТ = 74кг / 1,722м² ≈ 25,01 кг/м²

3. - Для каждого из сравниваемых людей, создайте объект со свойствами которые будут содержать их имя, массу тела и рост.
4. - Создайте метод в объекте который будет считать индекс массы тела и возвращать результат
5. Сравните индексы массы тел двух людей (данные ниже), и выведите в консоль результат. 
Например: Индекс массы тела Петра (28.1), больше индекса массы тела Дениса (24.3)!.

ДАННЫЕ:

    Петр: Вес: 72кг рост: 1.88м
    Денис: Вес: 82кг рост: 1.73м

ПОДСКАЗКА:

1. - В качестве метода можете использовать как Function Declaration, так и Fancrion Expression.
2. - Не забывайте про сокращенную запись свойств.
3. - Не забывайте про метод this.

*/



const peter = {
    weight: 72,
    height: 1.88,
    bodyMassIndex() {
        return this.weight / this.height ** 2
    }
}

const denis = {
    weight: 82,
    height: 1.73,
    bodyMassIndex() {
        return this.weight / this.height ** 2
    }
}


if (peter.bodyMassIndex() > denis.bodyMassIndex()) {
    console.log(`Индекс массы тела Петра (${peter.bodyMassIndex().toFixed(1)}), больше индекса массы тела Дениса (${denis.bodyMassIndex().toFixed(1)})!`)
} else if (peter.bodyMassIndex() < denis.bodyMassIndex()) {
    console.log(`Индекс массы тела Петра (${peter.bodyMassIndex().toFixed(1)}), меньше индекса массы тела Дениса (${denis.bodyMassIndex().toFixed(1)})!`)
} else {
    console.log('Индексы масс тела примерно равны')
}

