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

const students = [
    {
        id: '11ce',
        first_name: 'Dall',
        last_name: 'Puckring',
    },
    {
        id: '2958',
        first_name: 'Margarete',
        last_name: 'Brandi',
    },
    {
        id: '565a',
        first_name: 'Bendicty',
        last_name: 'Woodage',
    },
    {
        id: '3a16',
        first_name: 'Micki',
        last_name: 'Mattes',
    },
    {
        id: 'f396',
        first_name: 'Flory',
        last_name: 'Gladeche',
    },
    {
        id: 'de5f',
        first_name: 'Jamill',
        last_name: 'Emilien',
    },
    {
        id: '54cb',
        first_name: 'Brett',
        last_name: 'Aizikowitz',
    },
    {
        id: '9135',
        first_name: 'Lorry',
        last_name: 'Smallman',
    },
    {
        id: '978f',
        first_name: 'Gilly',
        last_name: 'Flott',
    },
];

const people = [
    {
        birthday: 'April 22, 1993',
        names: {
            first: 'Keith',
            last: 'Buckley',
        },
    },
    {
        birthday: 'January 3, 1975',
        names: {
            first: 'Larry',
            last: 'Heep',
        },
    },
    {
        birthday: 'February 12, 1944',
        names: {
            first: 'Linda',
            last: 'Bermeer',
        },
    },
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

const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

const inventory = [
    { type: 'shirt', price: 4000 },
    { type: 'pants', price: 4532 },
    { type: 'socks', price: 234 },
    { type: 'shirt', price: 2343 },
    { type: 'pants', price: 2343 },
    { type: 'socks', price: 542 },
    { type: 'pants', price: 123 },
];

// looping methods
toppings.forEach(t => console.log(t));

function addArms(face) {
    return `👋 ${face} 👋`;
}

console.log(faces.map(addArms));

const cleanPeople = people.map(p => {
    const birthday = new Date(p.birthday).getTime();
    const now = Date.now();

    const age = Math.floor((now - birthday) / 31536000000);
    return {
        age,
        name: `${p.names.first} ${p.names.last}`,
    };
});

console.log(cleanPeople);

const over40 = cleanPeople.filter(p => p.age > 40);
console.table(over40);

// reduce!!!
console.clear();
let total = 0;
orderTotals.forEach(singleTotal => {
    total += singleTotal;
});

console.log('total', total);

const allOrders = orderTotals.reduce((tot, num) => tot + num);

console.log('total reducer', allOrders);

const inventoryCounts = inventory.reduce((tot, item) => {
    tot[item.type] = tot[item.type] + 1 || 1;
    return tot;
}, {});

console.log('inventory', inventoryCounts);

const totalInventory = inventory.reduce((tot, item) => tot + item.price, 0);

console.log('total inventory', totalInventory);
