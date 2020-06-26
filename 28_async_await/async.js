const wait = (ms = 0) => new Promise(res => setTimeout(res, ms));

async function go() {
    console.log('starting');
    await wait(2000);
    console.log('ending');
}

go();

// function declaration

// async function fd() {}

// // arrow function
// const arrowFn = async () => {};

// window.addEventListener('click', async ev => {});

// const person = {
//     async sayHi() {},
//     async sayHello() {},
// };

function makePizza(toppings = []) {
    return new Promise((res, rej) => {
        if (toppings.includes('pineapple')) {
            rej('Seriusly? 🍍? no pizza for you!');
        }

        const amountTime = toppings.length * 1000 + 500;
        setTimeout(() => {
            // when ready resolve
            res(`Here is your pizza 🍕 with the toppings: ${toppings.join(' ')}`);
        }, amountTime);

        // if something wrong reject
    });
}

async function makeDinner() {
    const pizza1 = await makePizza(['peperoni']);
    console.log(pizza1);
    const pizza2 = await makePizza(['cheessee', 'mushrooms']);
    console.log(pizza2);
}

makeDinner();
