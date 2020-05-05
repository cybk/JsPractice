const div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);

const ul = `<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>`;

div.innerHTML = ul;

//----------------------------------------------------------
const img = document.createElement('img');
img.src = 'https://picsum.photos/500';

img.width = 250;
img.height = 250;
img.classList.add('cute');
img.alt = 'Cute Puppy!';
div.appendChild(img);

//------------------------------------------------------------
const myDivString = `
    <div class='myDiv'>
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
    </div>
`;

const ulElem = div.querySelector('ul');

ulElem.insertAdjacentHTML('beforebegin', myDivString);
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');

myDiv.firstElementChild.remove();

//---------------------------------------------------------------
function generatePlayerCard(name, age, height) {
    return `
    <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person 
            would be ${age * 7}, that could be a tall dog!
        </p>
        <button class="delete" type="button">&times; Delete</button>
    </div>
    `;
}

//---------------------------------------------------------------
const cards = document.createElement('div');
cards.classList.add('cards');

let cardsHtml = generatePlayerCard('wes', 12, 150);
cardsHtml += generatePlayerCard('scott', 12, 150);
cardsHtml += generatePlayerCard('keit', 12, 150);
cardsHtml += generatePlayerCard('snickers', 12, 150);
console.log(cardsHtml);

cards.innerHTML = cardsHtml;

div.insertAdjacentElement('beforebegin', cards);

function deleteCard(event) {
    const btn = event.currentTarget;
    btn.parentElement.closest('.playerCard').remove();
}

const buttons = document.querySelectorAll('.playerCard .delete');
buttons.forEach(button => button.addEventListener('click', deleteCard));
