const jokeButton = document.querySelector('.getJoke');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
    'Ugh.',
    '🤦',
    'omg dad',
    'you are the worst',
    'seriously',
    'stop it',
    'please stop',
    'that was the worst one',
];

const fetchJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
        },
    });
    const data = await response.json();
    return data;
};

const randomItemFromArray = (arr, not) => {
    const item = arr[Math.floor(Math.random() * arr.length)];

    if (item === not) {
        return randomItemFromArray(arr, not);
    }

    return item;
};

const handleClick = async () => {
    loader.classList.toggle('hidden');
    jokeButton.classList.toggle('hidden');
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;

    jokeButtonSpan.textContent = randomItemFromArray(buttonText, jokeButtonSpan.textContent);
    loader.classList.toggle('hidden');
    jokeButton.classList.toggle('hidden');
};

jokeButton.addEventListener('click', handleClick);
