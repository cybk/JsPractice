const myMap = new Map();

myMap.set('name', 'wes');
myMap.age = 100;
console.log(myMap);

const score = 200;

const prizes = new Map();
prizes.set(100, 'Bear');
prizes.set(200, 'Duck');
prizes.set(300, 'Car');

console.log(`You win a ${prizes.get(score)}`);
