const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function buttonClick(e) {
    const btn = e.currentTarget;
    const card = btn.closest('.card');

    const imgSource = card.querySelector('img').src;
    const desc = card.dataset.description;

    modalInner.innerHTML = `
    <img src="${imgSource.replace('200', '600')}" alt="${desc}">
    <p>${desc}</p>
    `;

    modalOuter.classList.add('open');
}

cardButtons.forEach(btn => btn.addEventListener('click', buttonClick));

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', e => {
    const isOutSide = e.target.closest('.modal-inner');
    if (!isOutSide) {
        closeModal();
    }
});

window.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
