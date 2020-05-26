const age = 100;

const person = {
    age,
    name: 'wes',
    dog: 'snickers',
    'cool-dude': true,
    clothing: {
        shirts: 10,
        pants: 2,
    },
    sayHello(greetings = 'Hey') {
        return `${greetings} ${this.name}`;
    },
};

person.job = 'web developers';
person.age = 50;

console.log(person);
console.log('cool-dude', person['cool-dude']);

delete person.job;

console.log(person.job);
console.log('greetings', person.sayHello());
