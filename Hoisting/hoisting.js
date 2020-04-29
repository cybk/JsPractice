sayHi();
console.log(`result of sum 2 + 3 is ${add(2, 3)}`);

// Hoisting, JS in run time "moves" the function definitions to beginning (just for normal functions)
function sayHi() {
    console.log('Hey!!!');
}

function add(a, b) {
    return a + b;
}

console.log(age);
// Hoisting, js in run time "moves" the variables declaration to the end;
var age = 10;
