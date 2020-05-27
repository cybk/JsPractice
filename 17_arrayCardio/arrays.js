const toppings = [
    'Mushrooms ',
    'Tomatoes',
    'Eggs',
    'Chili',
    'Lettuce',
    'Avocado',
    'Chiles',
    'Bacon',
    'Pickles',
    'Onions',
    'Cheese',
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
    beyond: 10,
    beef: 5,
    pork: 7,
};

const prices = {
    hotDog: 453,
    burger: 765,
    sausage: 634,
    corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
    { comment: 'Love the burgs', rating: 4 },
    { comment: 'Horrible Service', rating: 2 },
    { comment: 'Smoothies are great, liked the burger too', rating: 5 },
    { comment: 'Ambiance needs work', rating: 3 },
    { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

// Static MEthods
const range = Array.from({ length: 10 }, function(_, index) {
    return `wes ${index}`;
});

console.log(Array.isArray(range));

console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

Object.entries(meats).forEach(([key, value]) => {
    console.log(key, value);
});

// instance Methods
console.log(buns.join(' or '));

const lastItem = toppings.pop();
console.log(lastItem, toppings);

toppings.push(lastItem);
console.log(toppings);

const firstItem = toppings.shift();
console.log(firstItem, toppings);
toppings.unshift(firstItem);
console.log(toppings);

const isInToppings = toppings.includes('Hot Sauce');
console.log('is in toppings', isInToppings);
if (!isInToppings) {
    toppings.push('Hot Sauce');
}

console.log(toppings);
