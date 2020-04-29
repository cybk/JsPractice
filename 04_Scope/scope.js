/* eslint-disable */
const first = 'Wes';
let second = 'box';
var age = 100;

function sayHi () {
    console.log('Hi!!!');
}

// ----------------------------------------------------

function go () {
    const hair = 'blonde';
    const age = 200;

    console.log(age);
    console.log(hair);
}

console.log(age);
//console.log(hair);

function isCool (name) {
    let cool = false;
    if (name ==='wes'){
        cool = true;

    }

    console.log(cool);
    return cool;
}

//print with var
function print10Var () {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}

function print10let () {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

// ----------------------------------------------------

const dog = 'Snickers';

function logDog () {
    console.log(dog);
}

function goDog () {
    const dog = 'Sunny';
    logDog();
}

