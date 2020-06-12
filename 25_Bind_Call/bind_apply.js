const person = {
    name: 'Wes bos',
    sayHi() {
        console.log(`hey ${this.name}`);
        return `hey ${this.name}`;
    },
};

const sayHi = person.sayHi.bind(person);

// QS Example
const $ = document.querySelector.bind(document);

const bill = {
    total: 1000,
    calculate(taxRate) {
        console.log(this);
        return this.total + this.total * taxRate;
    },
};

const total = bill.calculate(0.13);
const calc = bill.calculate.bind(bill, 0.6);
const calc2 = bill.calculate.call(bill, 0.06);
const calc3 = bill.calculate.apply(bill, [0.06]);

console.log('first', calc());
console.log('second', calc2);
console.log('apply', calc3);
