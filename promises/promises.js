function makePizza(toppings = []) {
    return new Promise((res, rej) => {
        if (toppings.includes('pineapple')) {
            rej('Seriusly? 🍍? no pizza for you!');
        }

        const amountTime = toppings.length * 1000 + 500;
        setTimeout(() => {
            // when ready resolve
            res(`Here is your pizza 🍕 with the toppings ${toppings.join(' ')}`);
        }, amountTime);

        // if something wrong reject
    });
}

const pizza = makePizza(['pepperoni'])
    .then(p => {
        console.log('Got it!');
        console.log('pizza: ', p);
        return makePizza(['ham', 'cheese']);
    })
    .then(p => {
        console.log('new pizza: ', p);
        return makePizza(['hot peppers', 'onion', 'feta']);
    })
    .then(p => {
        console.log('last pizza', p);
        return makePizza(['cheesse', 'pineapple']);
    })
    .then(p => {
        console.log('Hawaiian', p);
    })
    .catch(err => {
        console.log('Ups!!');
        console.log(err);
    });
