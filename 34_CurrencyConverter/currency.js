const fromSelect = document.querySelector('[name="from_currency"]');
const fromAmount = document.querySelector('[name="from_amount"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const endPoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};

const currencies = {
    USD: 'United States Dollar',
    AUD: 'Australian Dollar',
    BGN: 'Bulgarian Lev',
    BRL: 'Brazilian Real',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    CNY: 'Chinese Yuan',
    CZK: 'Czech Republic Koruna',
    DKK: 'Danish Krone',
    GBP: 'British Pound Sterling',
    HKD: 'Hong Kong Dollar',
    HRK: 'Croatian Kuna',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    INR: 'Indian Rupee',
    JPY: 'Japanese Yen',
    KRW: 'South Korean Won',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    NOK: 'Norwegian Krone',
    NZD: 'New Zealand Dollar',
    PHP: 'Philippine Peso',
    PLN: 'Polish Zloty',
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    THB: 'Thai Baht',
    TRY: 'Turkish Lira',
    ZAR: 'South African Rand',
    EUR: 'Euro',
};

const fetchRates = async (base = 'USD') => {
    const res = await fetch(`${endPoint}?base=${base}`);
    const rates = await res.json();
    return rates;
};

const convert = async (amount, from, to) => {
    if (!ratesByBase[from]) {
        console.log(`We dont have ${from} to convert to ${to}. So go gets it!`);
        const rates = await fetchRates(from);
        ratesByBase[from] = rates;
    }

    const rate = ratesByBase[from].rates[to];
    return rate * amount;
};

const generateOptions = options =>
    Object.entries(options)
        .map(
            ([currencyCode, currencyName]) =>
                `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
        )
        .join('');

const formatCurrency = (amount, currency) =>
    Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(amount);

const handleInput = async () => {
    const rawAmount = await convert(fromAmount.value, fromSelect.value, toSelect.value);
    toEl.textContent = formatCurrency(rawAmount, toSelect.value);
};

const optionsHtml = generateOptions(currencies);
fromSelect.innerHTML = optionsHtml;
toSelect.innerHTML = optionsHtml;

form.addEventListener('input', handleInput);
