// создается родительский класс, с конструктором внутри
class Electric {
    constructor(name, power, color) {
        this.name = name,
            this.power = power,
            this.color = color,
            this.enabled = false;
    }

    // при записи в классы меняется структура кода,
    // функции getPower, toggleEnable,getInfo прописываются в родительский класс.
    getPower() {
        return this.enabled ? this.power : 0;
    }
    toggleEnable() {
        this.enabled = !this.enabled
    }

    getInfo() {
        return `Устройство ${this.name} - ${this.enabled ? 'включено' : 'выключено'}, текущее потребление: ${this.getPower()} W`
    }
}

// класс Comp расширяет родительский класс Electic
class Comp extends Electric {
    constructor(processor, power, name) {
        super(name, power);
        this.processor = processor;
        this.power = power,
            this.name = name
    }
}

// класс Lamp расширяет родительский класс Electic
class Lamp extends Electric {
    constructor(bright, power, name) {
        super(name, power);
        this.bright = bright;
        this.power = power
        this.name = name
    }
}

function sum(arr) {
    let result = 0
    arr.forEach((item) => {
        result += item.getPower()
    })
    return result;
}

const comp = new Comp(4, 200, 'Comp');
const lamp = new Lamp('bright', 80,'Lamp');

// в консолях выводятся два новых свойства getInfo и toggleEnable для comp и lamp
console.log(comp.getInfo())
comp.toggleEnable()
console.log(comp.getInfo())

console.log(lamp.getInfo())
lamp.toggleEnable()
console.log(lamp.getInfo())


console.log(`Общее потребление электроприборов ${sum([comp, lamp])} w`)