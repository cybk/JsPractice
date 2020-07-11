import { endPoint } from './elements.js';

const ratesByBase = {};

export async function fetchRates(base = 'USD') {
    const res = await fetch(`${endPoint}?base=${base}`);
    const rates = await res.json();
    return rates;
}

export async function convert(amount, from, to) {
    if (!ratesByBase[from]) {
        const rates = await fetchRates(from);
        ratesByBase[from] = rates;
    }

    const rate = ratesByBase[from].rates[to];
    return rate * amount;
}
