import { loader, jokeButton, jokeButtonSpan, jokeHolder } from './elements.js';
import { fetchJoke } from './lib.js';
import { randomItemFromArray } from './utils.js';
import buttonText from './buttontext.js';

export async function handleClick() {
    loader.classList.toggle('hidden');
    jokeButton.classList.toggle('hidden');
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;

    jokeButtonSpan.textContent = await randomItemFromArray(buttonText, jokeButtonSpan.textContent);
    loader.classList.toggle('hidden');
    jokeButton.classList.toggle('hidden');
}
