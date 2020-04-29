function outer() {
    const outerVar = 'Hey. I am the outer var!';
    return function inner() {
        const innerVar = 'Hey I am the inner var!';
        console.log(innerVar);
        console.log(outerVar);
    };
}

const innerFn = outer();

// --------------------------------
function createGreeting(greeting = '') {
    const myGreet = greeting.toUpperCase();
    return function(name) {
        return `${myGreet} ${name}`;
    };
}

const sayHello = createGreeting('Hello');
const sayHey = createGreeting('hey');
console.log(sayHello('wes'));
console.log(sayHello('kait'));
console.log(sayHey('kait'));

function createGame(gameName) {
    let score = 0;
    let games = 0;
    return function win(winNumber = 1) {
        score += winNumber;
        return function vict(gameNumber = 1) {
            games += gameNumber;
            return `Your name ${gameName} score is ${score} in ${games} games.`;
        };
    };
}

const hockeyGame = createGame('Hockey');
