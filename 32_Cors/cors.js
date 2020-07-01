const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form.search');
const recipesList = document.querySelector('.recipes');

async function fetchRecipes(query) {
    const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
    const data = await res.json();
    return data;
}

const displayRecipes = data => {
    const html = data
        .map(
            d => `<div class="recipe">
            <h2>${d.title}</h2>
            <p>${d.ingredients}</p>
            ${d.thumbnail && `<img src="${d.thumbnail}" alt="${d.title}"/>`}
            <a href="${d.href}">View Recipe</a>
        </div>`
        )
        .join('');
    recipesList.innerHTML = html;
};

async function handleSubmit(ev) {
    ev.preventDefault();
    const frm = ev.currentTarget;
    frm.submit.disabled = true;
    const recipes = await fetchRecipes(form.query.value);
    debugger;
    displayRecipes(recipes.results);
    frm.submit.disabled = false;
}

form.addEventListener('submit', handleSubmit);
fetchRecipes('pizza');
