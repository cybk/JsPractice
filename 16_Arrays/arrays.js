const names = ['wes', 'kait', 'snickers'];

console.log(names);
console.log(names.length);
console.log(names[names.length - 1]);

const names2 = [...names, 'lux'];
console.log('names2', names2);

// Mutation method - Do change the original data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
numbers.reverse();
console.log(numbers);

// Immutable - Do not change the original data
const pizzaSlice = numbers.slice(2, 4);
console.log('slice', pizzaSlice);

const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const newBikes = [...bikes.slice(0, 2), 'benotto', ...bikes.slice(2)];

const comments = [
    { text: 'Cool beans', id: 123 },
    { text: 'Love this', id: 133 },
    { text: 'Neato', id: 233 },
    { text: 'Good Bikes', id: 333 },
    { text: 'So Good', id: 433 },
];

function deleteComment(id, coms) {
    const commentIndex = coms.findIndex(cm => cm.id === id);
    return [...coms.slice(0, commentIndex), ...coms.slice(commentIndex + 1)];
}

console.log('Comments', comments);

console.log('Comment deleted', deleteComment(233, comments));
