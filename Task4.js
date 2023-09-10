function Electric(name, power, color) {
    this.name = name,
        this.power = power,
        this.color = color,
        this.enabled = false;
}

function Computer(name, power, color, processor) {
    this.name = name,
        this.power = power,
        this.color = color,
        this.processor = processor;
    this.text = function () {
        console.log(`${this.name} has: ${this.power} W, ${this.color} color and ${this.processor} core`)
    }
}

Computer.prototype = new Electric();

function Lamp(name, power, color, bright) {
    this.name = name,
        this.power = power,
        this.color = color,this.bright = bright;
}

Lamp.prototype = new Electric();

Electric.prototype.Enabled = function () {
    console.log(this.name + ' is on');
    this.enabled = true;
}

Electric.prototype.getPower = function () {
    return this.enabled ? this.power : 0;
}

const comp = new Electric('Computer', 80, 'white');
const lamp = new Electric('Lamp', 20, 'grey');

comp.Enabled();
lamp.Enabled();
// console.log(comp.getPower() + lamp.getPower());

function sum(arr) {
    let result = 0
    arr.forEach((item) => {
        result += item.getPower()
    })
    return result;
}

console.log(sum([comp, lamp]))