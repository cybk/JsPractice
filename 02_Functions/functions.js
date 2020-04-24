function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    // This is function body
    console.log('Calculate bill is running');
    const total = billAmount * (1 + taxRate) * (1 + tipRate);

    return Math.round(total);
}

const myTotal = calculateBill(100, 0.13);

console.log(`Total: $${myTotal}`);

function sayHiTo(firstName) {
    return `Hello ${firstName}`;
}

console.log(sayHiTo('Juan'));

/* Ways to declare functions */

/* Usual */
function doctorize(firstName) {
    return `Dr. ${firstName}`;
}

/* Anon function */
// function (firstName){
//     return `Dr. ${firstName}`;
// }

/* function expression */
const doctorizeConst = function(firstName) {
    return `Dr. ${firstName}`;
};

function inchToCM(inches) {
    return inches * 2.54;
}

/* Arrow function */
const inchToCM2 = inches => inches * 2.54;

function add(a, b = 3) {
    return a + b;
}

const addNumber = (a, b = 3) => a + b;

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

/* IIFE */
// Inmediately invoked function expression
(function() {
    console.log('Running the Anon function');
    return 'You are cool';
})();

(function(age) {
    const msg = `YOu are cool and age ${age}`;
    console.log(msg);
    return msg;
})(10);

// object
const wes = {
    name: 'Wes Bos',
    // Method!
    sayHi() {
        console.log(this);
        console.log(this.name);
        console.log('Hey Wes');
        return 'Hey Wes';
    },
    yellHi() {
        console.log('Hey Wesssssss');
    },
    wisperHi: () => {
        console.log('hii wess in a mouse');
    },
};

// Callback functions
// click callback
const button = document.querySelector('.clickme');

button.addEventListener('click', wes.yellHi);

// timer callback
setTimeout(wes.yellHi, 1000);
