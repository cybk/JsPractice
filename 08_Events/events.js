const butts = document.querySelector('.butts');
const coolButts = document.querySelector('.cool');

function handleClick() {
    console.log('It Got Clicked!!');
}

const hooray = () => console.log('Hooooorayy!!!!');

butts.addEventListener('click', handleClick);
coolButts.addEventListener('click', hooray);

const buyButons = Array.from(document.querySelectorAll('.buy'));

const applyEvent = item => {
    item.addEventListener('click', event => {
        console.log(parseFloat(event.target.dataset.price));
        event.stopPropagation();
    });
};

buyButons.forEach(applyEvent);

const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mousemove', e => {
    console.log(e.currentTarget);
});
//--------------------------------------------------------------------------------
window.addEventListener('click', event => {
    console.log('You Clicked on the window');
    console.log(event.target);
});
